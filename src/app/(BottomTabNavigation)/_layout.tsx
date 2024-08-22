import * as Notifications from 'expo-notifications';
import { Tabs } from 'expo-router/tabs';
import React, { useEffect } from 'react';

import GreyHomeIcon from '../../../assets/bottom-tab-home-inactive.svg';
import RedHomeIcon from '../../../assets/bottom-tab-home.svg';
import GreyScannerIcon from '../../../assets/bottom-tab-scanner-inactive.svg';
import RedScannerIcon from '../../../assets/bottom-tab-scanner.svg';
import GreyGearIcon from '../../../assets/bottom-tab-settings-gear-inactive.svg';
import RedGearIcon from '../../../assets/bottom-tab-settings-gear.svg';
import TabBarItem from '../../Components/TabBarItem/TabBarItem';
import { CaseContextProvider } from '../../context/CaseContext';
import { routeUserToUpdate } from '../../supabase/pushNotifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function useNotificationObserver() {
  useEffect(() => {
    let isMounted = true;

    Notifications.getLastNotificationResponseAsync().then(response => {
      if (!isMounted || !response?.notification) {
        return;
      }
      routeUserToUpdate(response);
    });

    const subscription = Notifications.addNotificationResponseReceivedListener(
      response => {
        routeUserToUpdate(response);
      },
    );

    return () => {
      isMounted = false;
      subscription.remove();
    };
  }, []);
}

export default function AppLayout() {
  useNotificationObserver();

  return (
    <CaseContextProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 90,
          },
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="AllCases"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarItem
                icon={focused ? <RedHomeIcon /> : <GreyHomeIcon />}
                label="Cases"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="QRCodeScanner"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarItem
                icon={focused ? <RedScannerIcon /> : <GreyScannerIcon />}
                label="QR Scanner"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarItem
                icon={focused ? <RedGearIcon /> : <GreyGearIcon />}
                label="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </CaseContextProvider>
  );
}
