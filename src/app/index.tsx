import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import DummyQueries from '../supabase/DummyQueries';
import { signInUser, signUpUser } from '../supabase/auth';

function StartScreen() {
  return (
    <View style={styles.container}>
      <Link href="/Welcome" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Welcome Screen</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Cases/QRCodeScanner" asChild>
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
      <TouchableOpacity style={styles.button} onPress={() => signUpUser()}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => signInUser()}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default StartScreen;
