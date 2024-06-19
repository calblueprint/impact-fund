import { router } from 'expo-router';
import { isError } from 'lodash';
import { Alert } from 'react-native';

import supabase from '../createClient';

/**
 * Checks whether the provided email is associated with an account in the public users table.
 * @param email
 * @returns whether the email exists
 */
export const emailExists = async (email: string): Promise<boolean> => {
  try {
    const { data } = await supabase.from('users').select().eq('email', email);
    if (!data || data.length === 0) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.warn('(emailExists) could not access Supabase!');
    throw error;
  }
};

/**
 * Clear the stack to prevent users going back. Allows push animation to be used.
 * @param path
 */
export function resetAndPushToRoute(path: string) {
  while (router.canGoBack()) {
    router.back();
  }
  router.replace(path);
}

/**
 * Clear the stack and route users to their home screen (relative to their login status).
 */
export async function resetAndPushToHome() {
  const { data } = await supabase.auth.getSession();
  while (router.canGoBack()) {
    router.back();
  }
  if (data.session) {
    router.replace('/AllCases');
  } else {
    router.replace('/Welcome');
  }
}

/**
 * Alerts the user that an error has occurred. Routes them away from the erroring screen.
 * @param response error object caught and passed to this handler.
 */
export function fullStopErrorHandler(response: any) {
  let alertMessage: string;
  if (isError(response)) {
    alertMessage = 'Message: ' + response.message;
  } else {
    alertMessage = 'Unknown Error';
  }
  Alert.alert('An Error Has Occurred', alertMessage, [
    {
      text: 'Navigate Home',
      onPress: () => resetAndPushToHome(),
      style: 'cancel',
    },
  ]);
}
