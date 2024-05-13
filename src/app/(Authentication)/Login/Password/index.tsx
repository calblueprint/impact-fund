import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import Arrow from '../../../../../assets/right-arrow-white.svg';
import {
  ButtonBlack,
  ButtonTextWhite,
} from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
import { SafeArea, ContentContainer } from '../../../../styles/global';
import { inputScreenStyles } from '../../../../styles/inputScreen';
import {
  ErrorMessageText,
  InstructionText,
  TitleText,
} from '../../../../styles/textStyles';

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
        <View style={inputScreenStyles.instructionContainer}>
          <TitleText>Please enter your password.</TitleText>
        </View>

        <View style={inputScreenStyles.inputBoxContainer}>
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

          <View style={{ width: '50%' }}>
            <ButtonBlack
              onPress={() => signIn()}
              disabled={password === '' || errorExists}
            >
              <ButtonTextWhite>Next</ButtonTextWhite>
              <Arrow />
            </ButtonBlack>
          </View>
        </View>
      </ContentContainer>
    </SafeArea>
  );
}
