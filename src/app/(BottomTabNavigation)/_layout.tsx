import { Tabs } from 'expo-router/tabs';
import React from 'react';

import GreyHomeIcon from '../../../assets/bottom-tab-home-inactive.svg';
import RedHomeIcon from '../../../assets/bottom-tab-home.svg';
import GreyGearIcon from '../../../assets/bottom-tab-settings-gear-inactive.svg';
import RedGearIcon from '../../../assets/bottom-tab-settings-gear.svg';
import GreyBellIcon from '../../../assets/bottom-tab-updates-bell-inactive.svg';
import RedBellIcon from '../../../assets/bottom-tab-updates-bell.svg';
import { TabBarItem } from '../../Components/HeaderComponents/HeaderComponents';

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
        name="Updates"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem
              icon={focused ? <RedBellIcon /> : <GreyBellIcon />}
              label="Updates"
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
