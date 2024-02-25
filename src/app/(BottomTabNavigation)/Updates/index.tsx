import { Session } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import Push from '../../../Components/Push';
import supabase from '../../../supabase/createClient';

function ProfileScreen() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>This is the /Updates/index update screen!</Text>
      <Push session={session} />
    </View>
  );
}

export default ProfileScreen;
