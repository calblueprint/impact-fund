import { Tabs } from 'expo-router/tabs';

export default function AppLayout() {
  return (
    <Tabs initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          href: '/home',
          tabBarLabel: 'Home',
          title: 'Home',
        }}
      />
    </Tabs>
  );
}
