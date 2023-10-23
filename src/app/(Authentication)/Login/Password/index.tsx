import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import supabase from '../../../../supabase/createClient';
import { signInUser } from '../../../../supabase/queries/auth';

export default function LoginScreen() {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayError, setDisplayError] = useState(false);
  const { email } = useLocalSearchParams<{ email: string }>();

  async function signInFunc(email: string, pword: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setDisplayError(true);
    } else if (!data) {
      setDisplayError(true);
    } else {
      setDisplayError(false);
      signInUser(email, password);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.instructionText}>Please enter your password.</Text>

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => signInFunc(email, password)}
      >
        <Text>Next</Text>
      </TouchableOpacity>

      <Text style={styles.errorMessage}>
        {' '}
        {displayError
          ? 'Oh no! The password you entered is incorrect, please try again.'
          : ' '}{' '}
      </Text>
    </View>
  );
}
