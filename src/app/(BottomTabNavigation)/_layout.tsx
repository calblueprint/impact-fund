import { Tabs } from 'expo-router/tabs';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="Cases"
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
    </Tabs>
  );
}
