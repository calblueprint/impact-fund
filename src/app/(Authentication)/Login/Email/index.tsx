import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { emailExists } from '../../../../supabase/queries/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [displayError, setDisplayError] = useState<boolean>(false);
  const [displayEmail, setDisplayEmail] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>('Email address');

  async function emailFind() {
    const isEmail = await emailExists(email);
    if (!isEmail) {
      setDisplayError(false);
      router.push({ pathname: 'Login/Password', params: { email } });
      setPlaceholder('Email address');

      setEmail('');
      setDisplayEmail(false);
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

      <View style={styles.inputBox}>
        <AuthInput
          input={email}
          setInput={setEmail}
          defaultValue="Email address"
          isPassword={false}
          displayInput={displayEmail}
          setDisplayInput={setDisplayEmail}
          keyboard="email-address"
          autoCapitalization={false}
          placeholder={placeholder}
          setPlaceholder={setPlaceholder}
        />
      </View>

      <Text style={styles.errorMessage}>
        {displayError
          ? 'The email you entered is either incorrect or not registered with the Impact Fund.'
          : ' '}
      </Text>
      <TouchableOpacity style={styles.nextButton} onPress={emailFind}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
