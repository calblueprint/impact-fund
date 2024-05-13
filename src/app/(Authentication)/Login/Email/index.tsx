import { router } from 'expo-router';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import Arrow from '../../../../../assets/right-arrow-white.svg';
import {
  ButtonBlack,
  ButtonTextWhite,
} from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import {
  ErrorMessageText,
  InstructionText,
  TitleText,
} from '../../../../styles/InputScreenStyles';
import { SafeArea, ContentContainer } from '../../../../styles/global';
import { emailExists } from '../../../../supabase/queries/auth';
import { inputScreenStyles } from '../../styles';

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
    <SafeArea>
      <ContentContainer>
        <View style={inputScreenStyles.instructionContainer}>
          <TitleText>Please enter your email address.</TitleText>
        </View>

        <View style={inputScreenStyles.inputBoxContainer}>
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

        <View style={inputScreenStyles.errorMessageContainer}>
          <ErrorMessageText>
            {errorExists ? errorMessage : ' '}
          </ErrorMessageText>
        </View>

        <View style={inputScreenStyles.inlineInputContainer}>
          <TouchableOpacity
            onPress={() => router.push('/OTPFlow/OTPEmailInput')}
          >
            <InstructionText>Forgot password?</InstructionText>
          </TouchableOpacity>

          <ButtonBlack
            onPress={emailFind}
            disabled={email.trim() === '' || errorExists}
            $halfWidth
          >
            <ButtonTextWhite>Next</ButtonTextWhite>
            <Arrow />
          </ButtonBlack>
        </View>
      </ContentContainer>
    </SafeArea>
  );
}
