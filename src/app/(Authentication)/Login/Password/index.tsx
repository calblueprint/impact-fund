import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';

import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';

export default function LoginScreen() {
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const sessionHandler = useSession();
  const [password, setPassword] = useState<string>('');

  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [queryLoading, setQueryLoading] = useState<boolean>(false);

  const onChangePassword = (text: string) => {
    setErrorExists(false);
    setPassword(text);
  };

  async function signIn() {
    setQueryLoading(true);
    const error = await sessionHandler.signInWithEmail(email, password);
    if (error) {
      setErrorExists(true);
      if (error.message === 'Invalid login credentials') {
        setErrorMessage(
          'Oh no! The password you entered is incorrect, please try again.',
        );
      } else {
        setErrorMessage(error.message);
      }
    } else {
      setErrorExists(false);
      setPassword('');
    }
    setQueryLoading(false);
  }

  return (
    <View style={device.safeArea}>
      <View style={input.screenContainer}>
        <View style={input.instructionContainer}>
          <Text style={fonts.headline}>Please enter your password.</Text>
        </View>

        <View style={input.inputBoxContainer}>
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

        <View style={input.errorMessageContainer}>
          <Text style={fonts.errorMessage}>
            {errorExists ? errorMessage : ' '}
          </Text>
        </View>

        <View style={input.inlineInputContainer}>
          <TouchableOpacity
            onPress={() => router.push('/OTPFlow/OTPEmailInput')}
          >
            <Text style={fonts.greyBody}>Forgot password?</Text>
          </TouchableOpacity>

          <ButtonBlack
            onPress={() => signIn()}
            disabled={password === '' || errorExists || queryLoading}
            $halfWidth
          >
            <Text style={fonts.whiteButton}>Next</Text>
            {queryLoading ? <ActivityIndicator /> : <Arrow />}
          </ButtonBlack>
        </View>
      </View>
    </View>
  );
}
