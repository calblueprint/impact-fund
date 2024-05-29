import { useLocalSearchParams, router } from 'expo-router';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

import styles from './styles';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import { useSession } from '../../../../context/AuthContext';
import { colors } from '../../../../styles/colors';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';

export default function OTPFlow() {
  const { changePassword } = useLocalSearchParams() as unknown as {
    changePassword: string;
  };
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const { password } = useLocalSearchParams() as unknown as {
    password: string;
  };

  const [token, setToken] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorExists, setErrorExists] = useState<boolean>(true);
  const [verifyLoading, setVerifyLoading] = useState<boolean>(false);
  const [resendLoading, setResendLoading] = useState<boolean>(false);

  const { verifyOtp, resendOtp, finishAccountSignUp } = useSession();

  const onChangeToken = (text: string) => {
    setErrorExists(false);
    setErrorMessage('');
    setToken(text);
  };

  const resendToken = async (email: string) => {
    setResendLoading(true);
    setErrorExists(false);
    const error = await resendOtp(email);
    if (error) {
      setErrorExists(true);
      setErrorMessage(error.message);
    }
    setResendLoading(false);
  };

  const verifyToken = async (token: string) => {
    setVerifyLoading(true);
    const verifyError = await verifyOtp(email, token);

    if (verifyError) {
      setErrorExists(true);
      setErrorMessage(verifyError.message);
    } else {
      if (changePassword === 'yes') {
        router.push('OTPFlow/OTPNewPassword');
      } else {
        const publicError = await finishAccountSignUp(email, password);
        if (publicError) {
          setErrorExists(true);
          setErrorMessage(publicError.message);
        } else {
          router.push('/');
        }
      }
    }
    setVerifyLoading(false);
  };

  return (
    <View style={device.safeArea}>
      <View style={input.screenContainer}>
        <View style={input.instructionContainer}>
          <Text style={fonts.headline}>Enter verification code.</Text>
          <Text style={fonts.greySmall}>We've sent it to {email}</Text>
        </View>

        <View style={input.inputBoxContainer}>
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

          <View style={styles.resendContainer}>
            <Text style={fonts.greySmall}>Didn't receive a code? </Text>
            <TouchableOpacity
              disabled={resendLoading}
              onPress={() => resendToken(email)}
            >
              <Text
                style={[fonts.greySmall, { textDecorationLine: 'underline' }]}
              >
                tap here to resend it.
              </Text>
            </TouchableOpacity>
            {resendLoading ? <ActivityIndicator size="small" /> : null}
          </View>
        </View>

        <View style={input.errorMessageContainer}>
          <Text style={fonts.errorMessage}>
            {errorExists ? errorMessage : ''}
          </Text>
        </View>

        <ButtonBlack
          disabled={
            token.length !== 6 || errorExists || verifyLoading || resendLoading
          }
          onPress={() => verifyToken(token)}
        >
          <Text style={fonts.whiteButton}>Continue</Text>
          {verifyLoading ? <ActivityIndicator /> : <Arrow />}
        </ButtonBlack>
      </View>
    </View>
  );
}
