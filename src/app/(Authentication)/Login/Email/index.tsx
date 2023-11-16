import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { emailExists } from '../../../../supabase/queries/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [displayError, setDisplayError] = useState(false);
  const [displayEmail, setDisplayEmail] = useState(false);

  async function emailFind() {
    const isEmail = await emailExists(email);
    if (!isEmail) {
      setDisplayError(true);
    } else {
      setDisplayError(false);
      router.push({ pathname: 'Login/Password', params: { email } });
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
          autoCap={false}
        />
      </View>

      <Text style={styles.errorMessage}>
        {displayError
          ? 'The email you entered is either incorrect or not registered with the Impact Fund.'
          : ' '}
      </Text>
      <View>
        <TouchableOpacity style={styles.nextButton} onPress={emailFind}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
