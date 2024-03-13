import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import supabase from './createClient';

/**
 * Register a user to recieve push notifications. Create an expo push notification token if they consent.
 *
 * @returns Returns an Expo token that can be used to send a push notification to the device using Expo's push notifications service.
 */
export async function registerForPushNotifications(): Promise<string> {
  let token;

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    // checks whether the user has consented to receive push notifications
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      // prompts the user regarding push notification consent
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return '';
    }
    // creates a user-specific push notification token to associate with the user's account
    token = await Notifications.getExpoPushTokenAsync({
      projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
    });
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token?.data ?? '';
}

/**
 * Update the user's expo push token. If it already exists, overwrite the value with the provided token.
 *
 * @param userId Target user that we won't to associate the token with.
 * @param token Expo push token used as a device address for sending push notifications.
 */
export async function updatePushToken(userId: string, token: string) {
  try {
    await supabase.from('users').upsert({ userId, expo_push_token: token });
  } catch (error) {
    console.warn(error);
    throw error;
  }
}
