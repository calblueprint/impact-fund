import { useEffect } from 'react';

import supabase from '../supabase/createClient';
import {
  registerForPushNotifications,
  updatePushToken,
} from '../supabase/pushNotifications';
import { resetAndPushToRoute } from '../supabase/queries/auth';

function StartScreen() {
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      // determine routing based on supabase auth events
      if (session) {
        if (_event !== 'USER_UPDATED') {
          resetAndPushToRoute('/AllCases');
        }
      } else {
        resetAndPushToRoute('/Welcome');
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
