import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import supabase from '../../../../supabase/createClient';

export default function SignUpScreen() {
  const { name } = useLocalSearchParams() as unknown as { name: string };
  const { email } = useLocalSearchParams() as unknown as { email: string };

  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

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
      const { error } = await supabase.auth.signInWithOtp({
        email,
      });
      if (error) {
        setErrorMessage('Sorry, you can only send a code every 60 seconds!');
        return;
      }
      router.push({
        pathname: 'OTPFlow/OTPVerify',
        params: { name, email, password },
      });
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.instructionText}>Next, make a password.</Text>

      <View style={styles.inputBox}>
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

      <View style={styles.inputBox}>
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

      <View>
        <Text style={styles.errorMessage}>
          {disableButton ? errorMessage : ' '}
        </Text>
      </View>

      <ButtonBlack
        disabled={password === '' || confirmPassword === '' || disableButton}
        style={styles.nextButton}
        onPress={handleSubmit}
      >
        <Text style={styles.nextText}>Continue</Text>
        <Arrow />
      </ButtonBlack>
    </View>
  );
}
