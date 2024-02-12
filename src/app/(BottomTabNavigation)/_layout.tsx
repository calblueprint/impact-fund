import { Tabs } from 'expo-router/tabs';
import React from 'react';

import RedHomeIcon from '../../../assets/bottom-tab-home.svg';
import RedGearIcon from '../../../assets/bottom-tab-settings-gear.svg';
import RedBellIcon from '../../../assets/bottom-tab-updates-bell.svg';
import { colors } from '../../styles/colors';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 90,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Tabs.Screen
        name="AllCases"
        options={{
          tabBarLabel: 'Cases',
          title: 'Cases',
          tabBarIcon: () => <RedHomeIcon />,
          tabBarLabelStyle: {
            fontSize: 9,
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 21,
            color: colors.midRed,
          },
          tabBarActiveTintColor: colors.black,
        }}
      />
      <Tabs.Screen
        name="Updates"
        options={{
          tabBarLabel: 'Updates',
          title: 'Updates',
          tabBarIcon: () => <RedBellIcon />,
          tabBarLabelStyle: {
            fontSize: 9,
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 21,
            color: colors.midRed,
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
          tabBarIcon: () => <RedGearIcon />,
          tabBarLabelStyle: {
            fontSize: 9,
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 21,
            color: colors.midRed,
          },
        }}
      />
    </Tabs>
  );
}
