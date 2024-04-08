import * as Notifications from 'expo-notifications';
import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { Linking } from 'react-native';

import { AuthContextProvider } from '../context/AuthContext';

export default function StackLayout() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
    handleSuccess: async () => console.log('handle success notification'),
    handleError: async () => console.log('handle error notification'),
  });

  const lastNotificationResponse = Notifications.useLastNotificationResponse();

  useEffect(() => {
    if (lastNotificationResponse) {
      const updateId =
        lastNotificationResponse.notification.request.content.data.updateId;
      console.log(updateId);
      Linking.openURL(`/AllCases/Updates/UpdateView/${updateId}`);
    }
  }, [lastNotificationResponse]);

  return (
    <AuthContextProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(Authentication)" options={{}} />
        <Stack.Screen name="(BottomTabNavigation)" options={{}} />
      </Stack>
    </AuthContextProvider>
  );
}
