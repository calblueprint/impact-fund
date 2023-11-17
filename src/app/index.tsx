import { router } from 'expo-router';
import { useEffect } from 'react';

import supabase from '../supabase/createClient';

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
        router.replace('/AllCases');
      } else {
        router.replace('Welcome');
      }
    });
    // return () => authListener.subscription.unsubscribe();
  }, []);
}

export default StartScreen;
