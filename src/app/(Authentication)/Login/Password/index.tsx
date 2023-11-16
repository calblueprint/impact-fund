import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { passwordExists, signInUser } from '../../../../supabase/queries/auth';

export default function LoginScreen() {
  const [password, setPassword] = useState('');
  const [displayError, setDisplayError] = useState(false);
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const [displayPassword, setDisplayPassword] = useState(false);
  const [placeholder, setPlaceholder] = useState('Password');
  const [isFocused, setIsFocused] = useState(false);

  const onClick = () => {
    setPlaceholder('');
    setIsFocused(true);
    setDisplayPassword(true);
  };

  const offClick = () => {
    setPlaceholder('Password');
    setIsFocused(false);
  };

  function inputPassword(password: string) {
    setPassword(password);
  }

  function removePassword() {
    if (password.trim() === '') {
      setDisplayPassword(false);
    }
  }

  async function signIn() {
    const isPassword = await passwordExists(email, password);
    if (!isPassword) {
      setDisplayError(true);
    } else {
      setDisplayError(false);
      setPassword('');
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
        style={[styles.input, isFocused && styles.inputFocused]}
        value={password}
        onChangeText={inputPassword}
        onEndEditing={removePassword}
        onFocus={onClick}
        onBlur={offClick}
        placeholder={placeholder}
        secureTextEntry
        clearButtonMode="never"
      />

      <Text style={styles.errorMessage}>
        {displayError
          ? 'Oh no! The password you entered is incorrect, please try again.'
          : ' '}{' '}
      </Text>

      <View>
        <TouchableOpacity style={styles.nextButton} onPress={() => signIn()}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
