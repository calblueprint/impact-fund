import { useLocalSearchParams } from 'expo-router';
import { router } from 'expo-router/src/imperative-api';
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

import styles from './styles';
import BackButton from '../../../../../assets/back-button.svg';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import {
  ButtonBlack,
  ButtonTextWhite,
} from '../../../../Components/AuthButton/AuthButton';
import { useSession } from '../../../../context/AuthContext';
import { colors } from '../../../../styles/colors';
import {
  ContentContainer,
  ErrorMessageContainer,
  ErrorMessageText,
  InputBoxContainer,
  InstructionContainer,
  InstructionText,
  SafeArea,
  TitleText,
} from '../../styles';

export default function OTPFlow() {
  const { changePassword } = useLocalSearchParams() as unknown as {
    changePassword: string;
  };
  const { name } = useLocalSearchParams() as unknown as { name: string };
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const { password } = useLocalSearchParams() as unknown as {
    password: string;
  };
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorExists, setErrorExists] = useState(true);
  const { verifyOtp, resendOtp } = useSession();

  const onChangeToken = (text: string) => {
    setErrorExists(false);
    setErrorMessage('');
    setToken(text);
  };

  const verifyToken = async (token: string) => {
    const { error } = await verifyOtp(email, token);
    if (error) {
      setErrorExists(true);
      setErrorMessage('Sorry! The verification code was incorrect.');
      return;
    }
    if (changePassword === 'yes') {
      router.push('OTPFlow/OTPNewPassword');
    } else {
      router.push({
        pathname: 'SignUp/Address',
        params: { email, password, name },
      });
    }
  };

  return (
    <SafeArea>
      <ContentContainer>
        <TouchableOpacity onPress={() => router.back()}>
          <BackButton />
        </TouchableOpacity>

        <InstructionContainer>
          <TitleText>Enter verification code.</TitleText>
          <InstructionText>We've sent it to {email}</InstructionText>
        </InstructionContainer>

        <InputBoxContainer>
          <OTPTextInput
            inputCount={6}
            tintColor={colors.darkGrey}
            defaultValue={token}
            inputCellLength={1}
            handleTextChange={onChangeToken}
            containerStyle={styles.otpContainer}
            textInputStyle={styles.otpInputBoxes}
            keyboardType="number-pad"
            autoFocus={false}
          />
          <InstructionText>
            Didn't receive a code? Go back to confirm your email or
            <TouchableOpacity onPress={() => resendOtp(email)}>
              <InstructionText style={{ textDecorationLine: 'underline' }}>
                {' '}
                tap here to resend it.
              </InstructionText>
            </TouchableOpacity>
          </InstructionText>
        </InputBoxContainer>

        <ErrorMessageContainer>
          <ErrorMessageText>{errorMessage}</ErrorMessageText>
        </ErrorMessageContainer>

        <ButtonBlack
          disabled={token.length !== 6 || errorExists}
          onPress={() => verifyToken(token)}
        >
          <ButtonTextWhite>Continue</ButtonTextWhite>
          <View>
            <Arrow style={{ marginRight: 10 }} />
          </View>
        </ButtonBlack>
      </ContentContainer>
    </SafeArea>
  );
}
