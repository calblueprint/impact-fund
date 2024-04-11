import { Tabs } from 'expo-router/tabs';
import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
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

const TabBarItem = ({ icon, label, focused }: TabBarItemProps) => (
  <View
    style={[
      styles.mainContainer,
      { backgroundColor: focused ? colors.lightRed : 'transparent' },
    ]}
  >
    <View style={styles.iconContainer}>
      {icon}
      <Text
        style={[
          styles.tabBarText,
          { color: focused ? colors.midRed : colors.midGrey },
        ]}
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
