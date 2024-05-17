import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../components/AuthButton/AuthButton';
import AuthInput from '../../../../components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';

export default function OTPNewPassword() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const { updateUser } = useSession();

  const [disableButton, setDisableButton] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangePassword = (text: string) => {
    setDisableButton(false);
    setErrorMessage('');
    setPassword(text);
  };

  const onChangeConfirmPassword = (text: string) => {
    setDisableButton(false);
    setErrorMessage('');
    setConfirmPassword(text);
  };

  const validatePassword = () => {
    const lengthRegex = /^.{6,}$/;
    if (!lengthRegex.test(password)) {
      setDisableButton(true);
      setErrorMessage('Your password needs at least six characters!');
      return false;
    }
    return true;
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      setDisableButton(true);
      setErrorMessage('Your passwords should match each other.');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    setDisableButton(true);
    if (validatePassword() && validateConfirmPassword()) {
      const { error } = await updateUser({ password });
      if (error) {
        setErrorMessage(error.message);
        return;
      }
      router.push({
        pathname: '/(BottomTabNavigation)/AllCases/',
      });
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <View style={device.safeArea}>
      <View style={device.content}>
        <View style={input.instructionContainer}>
          <Text style={fonts.headline}>Create a new password.</Text>
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
            {disableButton ? errorMessage : ' '}
          </Text>
        </View>

        <ButtonBlack
          disabled={password === '' || confirmPassword === '' || disableButton}
          onPress={handleSubmit}
        >
          <Text style={fonts.whiteButton}>Continue</Text>
          <Arrow />
        </ButtonBlack>
      </View>
    </View>
  );
}
