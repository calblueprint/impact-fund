import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';

export default function SignUpScreen() {
  const { name } = useLocalSearchParams() as unknown as { name: string };
  const { email } = useLocalSearchParams() as unknown as { email: string };

  const { sendOtp } = useSession();

  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangePassword = (text: string) => {
    setErrorExists(false);
    setPassword(text);
  };

  const onChangeConfirmPassword = (text: string) => {
    setErrorExists(false);
    setConfirmPassword(text);
  };

  const validatePassword = () => {
    const lengthRegex = /^.{6,}$/;
    if (!lengthRegex.test(password)) {
      setErrorExists(true);
      setErrorMessage('Your password needs at least six characters!');
      return false;
    }
    setErrorExists(false);
    return true;
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      setErrorExists(true);
      setErrorMessage('Your passwords should match each other.');
      return false;
    }
    setErrorExists(false);
    return true;
  };

  const handleSubmit = async () => {
    setErrorExists(true);
    if (validateConfirmPassword() && validatePassword()) {
      const { error } = await sendOtp(email);
      if (error) {
        setErrorExists(true);
        setErrorMessage(error.message);
      } else {
        router.push({
          pathname: 'OTPFlow/OTPVerify',
          params: { name, email, password },
        });
        setPassword('');
        setConfirmPassword('');
      }
    }
  };

  return (
    <View style={device.safeArea}>
      <View style={input.screenContainer}>
        <View style={input.instructionContainer}>
          <Text style={fonts.headline}>Next, make a password.</Text>
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

          <AuthInput
            input={confirmPassword}
            onChangeInput={onChangeConfirmPassword}
            labelText="Confirm password"
            placeholderText="Confirm password"
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

        <ButtonBlack
          disabled={errorExists || password === '' || confirmPassword === ''}
          onPress={handleSubmit}
        >
          <Text style={fonts.whiteButton}>Continue</Text>
          <Arrow />
        </ButtonBlack>
      </View>
    </View>
  );
}
