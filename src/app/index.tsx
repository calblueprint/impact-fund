import { router } from 'expo-router';
import { useEffect } from 'react';

import supabase from '../supabase/createClient';
import {
  registerForPushNotifications,
  updatePushToken,
} from '../supabase/pushNotifications';

const resetAndPushToRouter = (path: string) => {
  while (router.canGoBack()) {
    router.back();
  }
  router.replace(path);
};

function StartScreen() {
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(_event);
      // determine routing based on supabase auth events
      if (session) {
        if (_event !== 'USER_UPDATED') {
          resetAndPushToRouter('/AllCases');
        }
      } else {
        resetAndPushToRouter('/Welcome');
      }
      // generate a new push token on sign in
      if (session && _event === 'SIGNED_IN') {
        registerForPushNotifications().then(async (token: string) => {
          updatePushToken(session.user.id, token);
        });
      }
    });
  }, []);
}

export default StartScreen;
