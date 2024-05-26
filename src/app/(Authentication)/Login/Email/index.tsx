import { router } from 'expo-router';
import React, { useState } from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';

import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';
import { emailExists } from '../../../../supabase/queries/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [queryLoading, setQueryLoading] = useState<boolean>(false);

  const onChangeEmail = (text: string) => {
    setErrorExists(false);
    setEmail(text);
  };

  async function emailFind() {
    setQueryLoading(true);
    const isEmail = await emailExists(email);
    if (!isEmail) {
      setErrorExists(true);
      setErrorMessage(
        'The email you entered is either incorrect or not registered with the Impact Fund.',
      );
    } else {
      router.push({ pathname: 'Login/Password', params: { email } });
    }
    setQueryLoading(false);
  }

  return (
    <View style={device.safeArea}>
      <View style={input.screenContainer}>
        <View style={input.instructionContainer}>
          <Text style={fonts.headline}>Please enter your email address.</Text>
        </View>

        <View style={input.inputBoxContainer}>
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
            onPress={emailFind}
            disabled={email.trim() === '' || errorExists || queryLoading}
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
