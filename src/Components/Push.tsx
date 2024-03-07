import { Session } from '@supabase/supabase-js';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { Platform } from 'react-native';

import supabase from '../supabase/createClient';

async function registerForPushNotificationsAsync() {
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
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return '';
    }
    token = await Notifications.getExpoPushTokenAsync({
      // projectId: Constants?.expoConfig?.extra?.eas.projectId, // TODO: figure out why this isnt working
      projectId: 'd1a810ad-7132-4890-888f-0142c444b21d',
    });
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token?.data ?? '';
}

export default function Push({ session }: { session: Session }) {
  useEffect(() => {
    registerForPushNotificationsAsync().then(async token => {
      const { error } = await supabase
        .from('users')
        .upsert({ userId: session?.user.id, expo_push_token: token }); // push token is used to set up edge function
      console.log(error);
    });
  }, []);
}
