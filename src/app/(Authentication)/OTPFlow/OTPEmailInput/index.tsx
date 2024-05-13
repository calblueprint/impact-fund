import { router } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';

import Arrow from '../../../../../assets/right-arrow-white.svg';
import {
  ButtonBlack,
  ButtonTextWhite,
} from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
import {
  ErrorMessageText,
  TitleText,
} from '../../../../styles/InputScreenStyles';
import { SafeArea, ContentContainer } from '../../../../styles/global';
import { emailExists } from '../../../../supabase/queries/auth';
import { inputScreenStyles } from '../../styles';

export default function OTPEmailInput() {
  const [email, setEmail] = useState<string>('');
  const { sendOtp } = useSession();

  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangeEmail = (text: string) => {
    setErrorExists(false);
    setErrorMessage(' ');
    setEmail(text);
  };

  async function getOTP() {
    setErrorExists(true);
    const isEmail = await emailExists(email);
    if (!isEmail) {
      setErrorMessage(
        'The email you entered is either incorrect or not registered with the Impact Fund.',
      );
    } else {
      const { error } = await sendOtp(email);
      if (error) {
        setErrorMessage('Sorry, you can only send a code every 60 seconds!');
        return;
      }
      router.push({
        pathname: '/OTPFlow/OTPVerify',
        params: { email, changePassword: 'yes' },
      });
      setErrorExists(false);
    }
  }

  return (
    <SafeArea>
      <ContentContainer>
        <View style={inputScreenStyles.instructionContainer}>
          <TitleText>
            Please enter the email you used to create your account.
          </TitleText>
        </View>

        <View style={inputScreenStyles.inputBoxContainer}>
          <AuthInput
            input={email}
            onChangeInput={onChangeEmail}
            labelText="Email"
            placeholderText="Email"
            isPassword={false}
            keyboard="default"
            autoCapitalization={false}
          />
        </View>

        <View style={inputScreenStyles.errorMessageContainer}>
          <ErrorMessageText>
            {errorExists ? errorMessage : ' '}
          </ErrorMessageText>
        </View>

        <ButtonBlack disabled={email === '' || errorExists} onPress={getOTP}>
          <ButtonTextWhite>Continue</ButtonTextWhite>
          <Arrow />
        </ButtonBlack>
      </ContentContainer>
    </SafeArea>
  );
}
