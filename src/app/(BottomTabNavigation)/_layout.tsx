import { Tabs } from 'expo-router/tabs';
import React from 'react';

import GreyHomeIcon from '../../../assets/bottom-tab-home-inactive.svg';
import RedHomeIcon from '../../../assets/bottom-tab-home.svg';
import GreyScannerIcon from '../../../assets/bottom-tab-scanner-inactive.svg';
import RedScannerIcon from '../../../assets/bottom-tab-scanner.svg';
import GreyGearIcon from '../../../assets/bottom-tab-settings-gear-inactive.svg';
import RedGearIcon from '../../../assets/bottom-tab-settings-gear.svg';
import RedBellIcon from '../../../assets/bottom-tab-updates-bell.svg';
import TabBarItem from '../../Components/TabBarItem/TabBarItem';

export default function AppLayout() {
  return (
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
  );
}
