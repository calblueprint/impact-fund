import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import BackButton from '../../../../../assets/back-button.svg';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
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
      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <BackButton />
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
          <TouchableOpacity
            onPress={() => router.push('/OTPFlow/OTPEmailInput')}
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <ButtonBlack
              onPress={emailFind}
              disabled={email.trim() === '' || errorExists}
            >
              <View style={styles.ButtonLine}>
                <Text style={styles.nextText}>Next</Text>
                <Arrow />
              </View>
            </ButtonBlack>
          </View>
        </View>
      </View>
    </View>
  );
}
