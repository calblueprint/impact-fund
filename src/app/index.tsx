import 'react-native-gesture-handler';
import { router } from 'expo-router';
import { useEffect } from 'react';

import supabase from '../supabase/createClient';

const resetAndPushToRouter = (path: string) => {
  while (router.canGoBack()) {
    router.back();
  }
  router.replace(path);
};

function StartScreen() {
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        if (_event !== 'USER_UPDATED') {
          resetAndPushToRouter('/AllCases');
        }
      } else {
        resetAndPushToRouter('/Welcome');
      }
    });
  }, []);
}

export default StartScreen;
