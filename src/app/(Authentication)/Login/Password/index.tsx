import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { passwordExists } from '../../../../supabase/queries/auth';

export default function LoginScreen() {
  const [password, setPassword] = useState('');
  const [displayError, setDisplayError] = useState(false);
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const [displayPassword, setDisplayPassword] = useState(false);

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

      <View style={styles.inputBox}>
        <AuthInput
          input={password}
          setInput={setPassword}
          defaultValue="Password"
          isPassword
          displayInput={displayPassword}
          setDisplayInput={setDisplayPassword}
          keyboard="default"
          autoCap={false}
        />
      </View>

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
