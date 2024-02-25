import { Stack } from 'expo-router';
import React from 'react';

import { AuthContextProvider } from '../context/AuthContext';

export default function StackLayout() {
  return (
    <AuthContextProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(BottomTabNavigation)" options={{}} />
      </Stack>
    </AuthContextProvider>
  );
}
