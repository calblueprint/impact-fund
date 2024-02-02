import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';

export default function LoginScreen() {
  const [password, setPassword] = useState<string>('');
  const [displayError, setDisplayError] = useState<boolean>(false);
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const [displayPassword, setDisplayPassword] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>('Password');
  const sessionHandler = useSession();

  async function signIn() {
    const { error } = await sessionHandler.signInWithEmail(email, password);

    if (error) {
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
          autoCapitalization={false}
          placeholder={placeholder}
          setPlaceholder={setPlaceholder}
        />
      </View>

      <Text style={styles.errorMessage}>
        {displayError
          ? 'Oh no! The password you entered is incorrect, please try again.'
          : ' '}{' '}
      </Text>

      <TouchableOpacity style={styles.nextButton} onPress={() => signIn()}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
