import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { passwordExists, signInUser } from '../../../../supabase/queries/auth';

export default function LoginScreen() {
  const [password, setPassword] = useState('');
  const [displayError, setDisplayError] = useState(false);
  // const { email } = useLocalSearchParams<{ email: string }>();
  // const userEmail = email as string;
  const email = useLocalSearchParams<{ email: string }>();
  const [displayPassword, setDisplayPassword] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [placeholder, setPlaceholder] = useState('Password');
  const [isFocused, setIsFocused] = useState(false);

  const onClick = () => {
    setPlaceholder('');
    setIsFocused(true);
    setDisplayPassword(true);
  };

  const offClick = () => {
    setPlaceholder('Email');
    setIsFocused(false);
  };

  function inputPassword(password: string) {
    if (password.trim() === '') {
      setDisplayPassword(false);
    }
    setPassword(password);
    if (password.trim() !== '') {
      setIsPassword(true);
    }
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

  async function signInFunc() {
    if (typeof email !== 'string') {
      // Handle the error case - redirect back or show an error
      router.push({ pathname: 'Login' });
      return;
    }
    const isPassword = await passwordExists(email, password);
    if (!isPassword) {
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

      <View style={styles.errorMessageBox}>
        <Text style={styles.errorMessage}>
          {' '}
          {displayError
            ? 'Oh no! The password you entered is incorrect, please try again.'
            : ' '}{' '}
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={[styles.nextButton, isPassword && styles.nextButtonOpacity]}
          onPress={() => signInFunc()}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
