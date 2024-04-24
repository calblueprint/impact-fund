import { router } from 'expo-router';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import BackButton from '../../../../../assets/back-button.svg';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import {
  ButtonBlack,
  ButtonTextWhite,
} from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { SafeArea, ContentContainer } from '../../../../styles/global';
import { emailExists } from '../../../../supabase/queries/auth';
import {
  ErrorMessageContainer,
  ErrorMessageText,
  InlineInputContainer,
  InputBoxContainer,
  InstructionContainer,
  InstructionText,
  TitleText,
} from '../../../../Components/InputScreenStyles/InputScreenStyles';

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
        <TouchableOpacity onPress={() => router.back()}>
          <BackButton />
        </TouchableOpacity>

        <InstructionContainer>
          <TitleText>Please enter your email address.</TitleText>
        </InstructionContainer>

        <InputBoxContainer>
          <AuthInput
            input={email}
            onChangeInput={onChangeEmail}
            labelText="Email address"
            placeholderText="Email address"
            isPassword={false}
            keyboard="email-address"
            autoCapitalization={false}
          />
        </InputBoxContainer>

        <ErrorMessageContainer>
          <ErrorMessageText>
            {errorExists ? errorMessage : ' '}
          </ErrorMessageText>
        </ErrorMessageContainer>

        <InlineInputContainer>
          <TouchableOpacity
            onPress={() => router.push('/OTPFlow/OTPEmailInput')}
          >
            <InstructionText>Forgot password?</InstructionText>
          </TouchableOpacity>

          <View style={{ width: '50%' }}>
            <ButtonBlack
              onPress={emailFind}
              disabled={email.trim() === '' || errorExists}
            >
              <ButtonTextWhite>Next</ButtonTextWhite>
              <Arrow />
            </ButtonBlack>
          </View>
        </InlineInputContainer>
      </ContentContainer>
    </SafeArea>
  );
}
