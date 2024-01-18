import { Tabs } from 'expo-router/tabs';
import React from 'react';
// import { TouchableOpacity } from 'react-native';

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
        name="Updates"
        options={{
          tabBarLabel: 'Updates',
          title: 'Updates',
          // tabBarButton: props => <TouchableOpacity {...props} />,
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
