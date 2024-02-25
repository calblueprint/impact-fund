import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';

export default function LoginScreen() {
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const sessionHandler = useSession();
  const [password, setPassword] = useState<string>('');

  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangePassword = (text: string) => {
    setErrorExists(false);
    setPassword(text);
  };
  const sessionHandler = useSession();

  async function signIn() {
    const isPassword = await sessionHandler.signInWithEmail(email, password);
    if (!isPassword) {
      setErrorExists(true);
      setErrorMessage(
        'Oh no! The password you entered is incorrect, please try again.',
      );
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
          onChangeInput={onChangePassword}
          labelText="Password"
          placeholderText="Password"
          isPassword
          keyboard="default"
          autoCapitalization={false}
        />
      </View>

      <View style={styles.errorMessageBox}>
        <Text style={styles.errorMessageText}>
          {errorExists ? errorMessage : ' '}
        </Text>
      </View>

      <View style={styles.nextLine}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        <TouchableOpacity
          disabled={password === '' || errorExists}
          style={
            password === '' || errorExists
              ? [styles.nextButtonBase, styles.nextButtonDisabled]
              : [styles.nextButtonBase, styles.nextButtonActive]
          }
          onPress={() => signIn()}
        >
          <Text style={styles.nextText}>Next</Text>
          <Arrow />
        </TouchableOpacity>
      </View>
    </View>
  );
}
