import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { emailExists } from '../../../../supabase/queries/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [displayEmail, setDisplayEmail] = useState(false);
  const [placeholder, setPlaceholder] = useState('Email');
  const [isFocused, setIsFocused] = useState(false);

  const onClick = () => {
    setPlaceholder('');
    setIsFocused(true);
    setDisplayEmail(true);
  };

  const offClick = () => {
    setPlaceholder('Email');
    setIsFocused(false);
  };

  function inputEmail(email: string) {
    setEmail(email);
  }

  function removeEmail() {
    if (email.trim() === '') {
      setDisplayEmail(false);
    }
    if (email.trim() !== '') {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
    setIsEmail(isEmail);
  }

  async function emailFind() {
    const isEmail = await emailExists(email);
    if (!isEmail) {
      setDisplayError(true);
    } else {
      setDisplayError(false);
      router.push({ pathname: 'Login/Password', params: { email } });
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.instructionText}>
        Please enter your email address.
      </Text>
      <Text style={styles.emailText}>
        {displayEmail ? 'Email Address' : ' '}{' '}
      </Text>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        value={email}
        onChangeText={inputEmail}
        onEndEditing={removeEmail}
        onFocus={onClick}
        onBlur={offClick}
        placeholder={placeholder}
        keyboardType="email-address"
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />

      <View style={styles.errorMessageBox}>
        <Text style={styles.errorMessage}>
          {' '}
          {displayError
            ? 'The email you entered is either incorrect or not registered with Impact Fund.'
            : ' '}{' '}
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={[styles.nextButton, isEmail ? styles.nextButtonOpacity : null]}
          onPress={emailFind}
          // disabled={!isEmail}
        >
          <Text style={[styles.nextText, isEmail ? styles.nextText : null]}>
            Next
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.errorMessage}>
        {' '}
        {displayError
          ? 'Oh no! The email you entered is incorrect, please try again'
          : ' '}{' '}
      </Text>
    </View>
  );
}
