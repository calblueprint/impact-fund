import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import supabase from '../../../../supabase/createClient';
import { signInUser } from '../../../../supabase/queries/auth';

export default function LoginScreen() {
  const [password, setPassword] = useState('');
  const [displayError, setDisplayError] = useState(false);
  const { email } = useLocalSearchParams<{ email: string }>();
  const [displayPassword, setDisplayPassword] = useState(false);
  // const [isPasswordVisible, setPasswordVisible] = useState(false);

  function inputPassword(password: string) {
    setDisplayPassword(true);
    setPassword(password);
  }

  function removePassword() {
    if (password.trim() === '') {
      setDisplayPassword(false);
    }
  }
  /*
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  */

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
      <Text style={styles.passwordText}>
        {displayPassword ? 'Password' : ' '}{' '}
      </Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={inputPassword}
        onEndEditing={removePassword}
        placeholder="Password"
        secureTextEntry
        clearButtonMode="never"
      />

      <View style={styles.errorMessageBox}>
        <Text style={styles.errorMessage}>
          {' '}
          {displayError ? 'The password you entered is incorrect.' : ' '}{' '}
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={[styles.nextButton]}
          onPress={() => signInFunc(email, password)}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
