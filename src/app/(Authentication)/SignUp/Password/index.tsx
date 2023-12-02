import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import AuthInput from '../../../../Components/AuthInput/AuthInput';

export default function SignUpScreen() {
  const { name } = useLocalSearchParams() as unknown as { name: string };
  const { email } = useLocalSearchParams() as unknown as { email: string };

  const [password, setPassword] = useState<string>('');
  const [displayErrorPassword, setDisplayErrorPassword] =
    useState<boolean>(false);
  const [displayPassword, setDisplayPassword] = useState<boolean>(false);
  const [placeholderPassword, setPlaceholderPassword] =
    useState<string>('Password');

  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [displayErrorPasswordMatch, setDisplayErrorPasswordMatch] =
    useState<boolean>(false);
  const [displayConfirmPassword, setDisplayConfirmPassword] =
    useState<boolean>(false);
  const [placeholderConfirmPassword, setPlaceholderConfirmPassword] =
    useState<string>('Confirm password');

  const validateConfirmPassword = () => {
    if (confirmPassword.trim() === password.trim()) {
      setDisplayErrorPasswordMatch(false);
      return true;
    } else {
      setDisplayErrorPasswordMatch(true);
      return false;
    }
  };

  const validatePassword = () => {
    const lengthRegex = /^.{6,}$/;
    return lengthRegex.test(password);
  };

  const handleSubmit = () => {
    if (!displayErrorPassword && validatePassword()) {
      if (validateConfirmPassword())
        router.push({
          pathname: 'SignUp/Address',
          params: { name, email, password },
        });
    }
    if (!validatePassword()) {
      setDisplayErrorPassword(true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.instructionText}>Create your account.</Text>

      <View style={styles.inputBox}>
        <AuthInput
          input={password}
          setInput={setPassword}
          defaultValue="Password"
          isPassword
          displayInput={displayPassword}
          setDisplayInput={setDisplayPassword}
          keyboard="default"
          autoCapitalization={false}
          placeholder={placeholderPassword}
          setPlaceholder={setPlaceholderPassword}
          errorHandling
          setDisplayError={setDisplayErrorPassword}
        />
      </View>

      <View style={styles.inputBox}>
        <AuthInput
          input={confirmPassword}
          setInput={setConfirmPassword}
          defaultValue="Confirm password"
          isPassword
          displayInput={displayConfirmPassword}
          setDisplayInput={setDisplayConfirmPassword}
          keyboard="default"
          autoCapitalization={false}
          placeholder={placeholderConfirmPassword}
          setPlaceholder={setPlaceholderConfirmPassword}
          errorHandling={false}
          setDisplayError={setDisplayErrorPasswordMatch}
        />
      </View>

      <View>
        <Text style={styles.errorMessage}>
          {' '}
          {displayErrorPassword
            ? 'Your password needs at least six characters!'
            : displayErrorPasswordMatch
            ? 'Your passwords should match each other.'
            : ' '}{' '}
        </Text>
      </View>

      <TouchableOpacity style={[styles.nextButton]} onPress={handleSubmit}>
        <Text style={styles.nextText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
