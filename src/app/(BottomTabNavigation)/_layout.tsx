import { Tabs } from 'expo-router/tabs';
import React from 'react';

// import BottomTabButton from '../../Components/BottomTabButton/BottomTabButton';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 84,
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
          // tabBarButton: props => <BottomTabButton {...props} />,
          tabBarItemStyle: {
            height: 56,
            maxWidth: 66,
            backgroundColor: '#00ff00',
            marginRight: 60,
            borderRadius: 10,
            borderWidth: 1,
          },
        }}
      />
      <Tabs.Screen
        name="Updates"
        options={{
          tabBarLabel: 'Updates',
          title: 'Updates',
          tabBarItemStyle: {
            height: 56,
            maxWidth: 66,
            backgroundColor: '#00ff00',
            // margin: 5,
            borderRadius: 10,
            borderWidth: 1,
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
          tabBarItemStyle: {
            height: 56,
            maxWidth: 66,
            backgroundColor: '#00ff00',
            marginLeft: 60,
            borderRadius: 10,
            borderWidth: 1,
          },
        }}
      />
    </Tabs>
  );
}
