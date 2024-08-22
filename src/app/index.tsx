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

        // generate a new push token on sign in
        if (_event === 'SIGNED_IN') {
          registerForPushNotifications().then(async (token: string) => {
            updatePushToken(session.user.id, token);
          });
        }
      } else {
        resetAndPushToRoute('/Welcome');
      }
    });
  }, []);
}

export default StartScreen;
