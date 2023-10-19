import { Session } from '@supabase/supabase-js';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';

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
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log(_event);
        if (session) {
          router.replace('/Cases');
        } else {
          router.replace('Welcome');
        }
      },
    );
    // return () => authListener.subscription.unsubscribe();
  }, []);
}

export default StartScreen;
