import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import BackButton from '../../../../../assets/back-button.svg';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import {
  ButtonBlack,
  ButtonTextWhite,
} from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
import { SafeArea } from '../../../../styles/global';
import {
  ContentContainer,
  ErrorMessageContainer,
  ErrorMessageText,
  InlineInputContainer,
  InputBoxContainer,
  InstructionContainer,
  InstructionText,
  TitleText,
} from '../../AuthFlowStyles';

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

  async function signIn() {
    const isPassword = await sessionHandler.signInWithEmail(email, password);
    if (!isPassword) {
      setErrorExists(true);
      setErrorMessage(
        'Oh no! The password you entered is incorrect, please try again.',
      );
    } else {
      //erroring!!!
      setErrorExists(false);
      setPassword('');
    }
  }

  return (
    <SafeArea>
      <ContentContainer>
        <TouchableOpacity onPress={() => router.back()}>
          <BackButton />
        </TouchableOpacity>

        <InstructionContainer>
          <TitleText>Please enter your password.</TitleText>
        </InstructionContainer>

        <InputBoxContainer>
          <AuthInput
            input={password}
            onChangeInput={onChangePassword}
            labelText="Password"
            placeholderText="Password"
            isPassword
            keyboard="default"
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
              onPress={() => signIn()}
              disabled={password === '' || errorExists}
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
