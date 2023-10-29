import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { emailExists } from '../../../../supabase/queries/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [displayError, setDisplayError] = useState(false);
  const [displayEmail, setDisplayEmail] = useState(false);

  function inputEmail(email: string) {
    setDisplayEmail(true);
    setEmail(email);
  }

  function removeEmail() {
    if (email.trim() === '') {
      setDisplayEmail(false);
    }
  }

  async function emailFind() {
    const isEmail = await emailExists(email);
    if (!isEmail) {
      setDisplayError(true);
    } else {
      setDisplayError(false);
      router.push({ pathname: 'Login/Password', params: { email } });
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.instructionText}>
          Please enter your email address.
        </Text>
        <Text style={styles.emailText}>
          {displayEmail ? 'Email Address' : ' '}{' '}
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={inputEmail}
          onEndEditing={removeEmail}
          placeholder="Email address"
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
            style={[styles.nextButton]}
            onPress={() => emailFind}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
