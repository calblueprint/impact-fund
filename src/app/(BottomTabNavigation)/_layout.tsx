import { Tabs } from 'expo-router/tabs';
import React from 'react';
import { View, Text } from 'react-native';

import GreyHomeIcon from '../../../assets/bottom-tab-home-inactive.svg';
import RedHomeIcon from '../../../assets/bottom-tab-home.svg';
import GreyGearIcon from '../../../assets/bottom-tab-settings-gear-inactive.svg';
import RedGearIcon from '../../../assets/bottom-tab-settings-gear.svg';
import GreyBellIcon from '../../../assets/bottom-tab-updates-bell-inactive.svg';
import RedBellIcon from '../../../assets/bottom-tab-updates-bell.svg';
import { colors } from '../../styles/colors';
interface TabBarItemProps {
  icon: React.ReactNode;
  label: string;
  focused: boolean;
}

//Inline styling required --> can't make a styles.ts in this directory otherwise it'll make a new bottom tab idk why
const TabBarItem = ({ icon, label, focused }: TabBarItemProps) => (
  <View
    style={{
      backgroundColor: focused ? colors.lightRed : 'transparent',
      borderRadius: 10,
      height: 55,
      width: 66,
    }}
  >
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
      }}
    >
      {icon}
      <Text
        style={{
          fontSize: 9,
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 21,
          color: focused ? colors.midRed : colors.midGrey,
        }}
      >
        {label}
      </Text>
    </View>
  </View>
);
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
          tabBarIconStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          },
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
          tabBarIconStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          },
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
          tabBarIconStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          },
        }}
      />
    </Tabs>
  );
}
