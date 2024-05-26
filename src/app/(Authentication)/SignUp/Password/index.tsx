import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { z } from 'zod';

import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';

export default function SignUpScreen() {
  const { name } = useLocalSearchParams() as unknown as { name: string };
  const { streetAddress } = useLocalSearchParams() as unknown as {
    streetAddress: string;
  };
  const { city } = useLocalSearchParams() as unknown as { city: string };
  const { state } = useLocalSearchParams() as unknown as { state: string };
  const { zipcode } = useLocalSearchParams() as unknown as { zipcode: string };

  const { sendOtp } = useSession();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangeEmail = (text: string) => {
    setErrorExists(false);
    setEmail(text);
  };

  const onChangePassword = (text: string) => {
    setErrorExists(false);
    setPassword(text);
  };

  const onChangeConfirmPassword = (text: string) => {
    setErrorExists(false);
    setConfirmPassword(text);
  };

  const validateEmail = (): boolean => {
    try {
      const emailSchema = z.string().email();
      emailSchema.parse(email);
      setErrorExists(false);
      return true;
    } catch (error) {
      console.log(error);
      setErrorExists(true);
      setErrorMessage('Sorry! Invalid email address.');
      return false;
    }
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
    if (validateEmail() && validateConfirmPassword() && validatePassword()) {
      const { error } = await sendOtp(email);
      if (error) {
        setErrorExists(true);
        setErrorMessage(error.message);
      } else {
        router.push({
          pathname: 'OTPFlow/OTPVerify',
          params: {
            name,
            email,
            password,
            streetAddress,
            city,
            state,
            zipcode,
          },
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
            input={email}
            onChangeInput={onChangeEmail}
            labelText="Email address"
            placeholderText="Email address"
            isPassword={false}
            keyboard="default"
            autoCapitalization={false}
          />

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
