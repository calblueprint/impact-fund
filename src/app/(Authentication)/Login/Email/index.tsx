import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import supabase from '../../../../supabase/createClient';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [displayError, setDisplayError] = useState(false);

  async function emailFind(email: string) {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('email', email.toLowerCase());
    if (error) {
      setDisplayError(true);
    } else if (data.length !== 0) {
      setDisplayError(false);
      router.push({ pathname: 'Login/Password', params: { email } });
    } else {
      setDisplayError(true);
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
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email address"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View>
        <TouchableOpacity
          style={[styles.nextButton]}
          onPress={() => emailFind(email)}
        >
          <Text>Next</Text>
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
