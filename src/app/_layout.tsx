import { Stack } from 'expo-router';
// import AppLayout from './(BottomTabNavigation)/_layout';

export default function StackLayout() {
  // return <AppLayout />;
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="(BottomTabNavigation)" options={{}} />
    </Stack>
  );
}
