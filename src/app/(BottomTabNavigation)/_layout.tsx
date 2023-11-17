import { Tabs } from 'expo-router/tabs';
import React from 'react';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="AllCases"
        options={{
          tabBarLabel: 'Cases',
          title: 'Cases',
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
        }}
      />
      <Tabs.Screen
        name="Updates"
        options={{
          tabBarLabel: 'Updates',
          title: 'Updates',
        }}
      />
    </Tabs>
  );
}
