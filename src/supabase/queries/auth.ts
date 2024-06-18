import { router } from 'expo-router';

import supabase from '../createClient';

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
export async function resetAndPushToRoute(path: string) {
  while (router.canGoBack()) {
    router.back();
  }
  router.replace(path);
}
