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
    // supabase.auth.getSession().then(({ data: { session } }) => {
    //   if (session) {
    //     router.replace('/Cases');
    //   } else {
    //     router.replace('/Welcome');
    //   }
    // });
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        resetAndPushToRouter('/AllCases');
      } else {
        resetAndPushToRouter('/Welcome');
      }
    });
    // return () => authListener.subscription.unsubscribe();
  }, []);
}

export default StartScreen;
