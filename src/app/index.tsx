import { Session } from '@supabase/supabase-js';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';
import DummyQueries from '../../lib/DummyQueries';
import { supabase } from '../../lib/supabase';
import styles from './styles';

function StartScreen() {
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
      <Link href="/Welcome" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Welcome Screen</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/SignUp" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Sign Up Screen</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Cases" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Cases Screen</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Profile" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Profile Screen</Text>
        </TouchableOpacity>
      </Link>
      <DummyQueries />
    </View>
  );
}

export default StartScreen;
