import { Tabs } from 'expo-router/tabs';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Cases"
        options={{
          href: 'Cases/index.tsx',
          tabBarLabel: 'Cases',
          title: 'Cases',
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          href: 'Profile/index.tsx',
          tabBarLabel: 'Profile',
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
