import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import AuthInput from '../../../../Components/AuthInput/AuthInput';

export default function SignUpScreen() {
  const { name } = useLocalSearchParams() as unknown as { name: string };
  const { email } = useLocalSearchParams() as unknown as { email: string };

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
    return true;
  };

  const validateConfirmPassword = () => {
    if (confirmPassword.trim() !== password.trim()) {
      setErrorExists(true);
      setErrorMessage('Your passwords should match each other.');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validatePassword() && validateConfirmPassword()) {
      router.push({
        pathname: 'SignUp/Address',
        params: { name, email, password },
      });
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

        <View style={styles.image}>
          <Image
            source={require('../../../../../assets/inline-logo.jpeg')}
            style={{ width: 100, height: 12.5 }}
          />
        </View>
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
          {errorExists ? errorMessage : ' '}
        </Text>
      </View>

      <TouchableOpacity
        disabled={
          password.trim() === '' || confirmPassword.trim() === '' || errorExists
        }
        style={
          password.trim() === '' || confirmPassword.trim() === '' || errorExists
            ? styles.nextButtonGray
            : styles.nextButton
        }
        onPress={handleSubmit}
      >
        <Text style={styles.nextText}>Continue</Text>
        <View>
          <Arrow />
        </View>
      </TouchableOpacity>
    </View>
  );
}
