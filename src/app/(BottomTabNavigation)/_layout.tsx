import { Tabs } from 'expo-router/tabs';
import React from 'react';

import BottomTabButton from '../../Components/BottomTabButton/BottomTabButton';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="AllCases"
        options={{
          tabBarLabel: 'Cases',
          title: 'Cases',
          tabBarButton: props => <BottomTabButton {...props} />,
          // tabBarActiveBackgroundColor: '#000000',
          // tabBarItemStyle: {
          //   height: 56,
          //   backgroundColor: '#00ff00',
          //   margin: 5,
          //   borderRadius: 10,
          //   borderWidth: 1,
          // },
        }}
      />
      <Tabs.Screen
        name="Updates"
        options={{
          tabBarLabel: 'Updates',
          title: 'Updates',
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
