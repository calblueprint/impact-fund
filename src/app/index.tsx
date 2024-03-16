import { router } from 'expo-router';
import { useEffect, useState } from 'react';

import supabase from '../supabase/createClient';

const resetAndPushToRouter = (path: string) => {
  while (router.canGoBack()) {
    router.back();
  }
  router.replace(path);
};

function StartScreen() {
  useEffect(() => {
    // supabase.auth.getSession().then(({ data: { session } }) => {
    //   if (session) {
    //     router.replace('/Cases');
    //   } else {
    //     router.replace('/Welcome');
    //   }
    // });
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        if (_event !== 'USER_UPDATED') {
          //if user password doesn't exist, send to /Password
          //if user address doesn't exist, send to /Address
          resetAndPushToRouter('/AllCases');
        }
      } else {
        resetAndPushToRouter('/Welcome');
      }
    });
    // return () => authListener.subscription.unsubscribe();
  }, []);
}

export default StartScreen;
