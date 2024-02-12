import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { emailExists } from '../../../../supabase/queries/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangeEmail = (text: string) => {
    setErrorExists(false);
    setEmail(text);
  };

  async function emailFind() {
    const isEmail = await emailExists(email);
    if (!isEmail) {
      setErrorExists(true);
      setErrorMessage(
        'The email you entered is either incorrect or not registered with the Impact Fund.',
      );
    } else {
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

      <View style={styles.inputBox}>
        <AuthInput
          input={email}
          onChangeInput={onChangeEmail}
          labelText="Email address"
          placeholderText="Email address"
          isPassword={false}
          keyboard="email-address"
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
          disabled={email.trim() === '' || errorExists}
          style={
            email.trim() === '' || errorExists
              ? [styles.nextButtonBase, styles.nextButtonDisabled]
              : [styles.nextButtonBase, styles.nextButtonActive]
          }
          onPress={emailFind}
        >
          <Text style={styles.nextText}>Next</Text>
          <View>
            <Arrow style={styles.arrow} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
