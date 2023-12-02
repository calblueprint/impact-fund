import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import AuthInput from '../../../../Components/AuthInput/AuthInput';

export default function SignUpScreen() {
  const { name } = useLocalSearchParams() as unknown as { name: string };
  const { email } = useLocalSearchParams() as unknown as { email: string };

  const [password, setPassword] = useState('');
  const [displayErrorPassword, setDisplayErrorPassword] = useState(false);
  const [displayPassword, setDisplayPassword] = useState(false);
  const [placeholderPassword, setPlaceholderPassword] = useState('Password');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayErrorPasswordMatch, setDisplayErrorPasswordMatch] =
    useState(false);
  const [displayConfirmPassword, setDisplayConfirmPassword] = useState(false);
  const [placeholderConfirmPassword, setPlaceholderConfirmPassword] =
    useState('Confirm password');

  const validatePassword = () => {
    // Implement your password requirements here
    const lengthRegex = /^.{6,}$/;
    return lengthRegex.test(password);
  };

  const validateConfirmPassword = () => {
    if (confirmPassword.trim === password.trim) {
      setDisplayErrorPasswordMatch(false);
    } else {
      setDisplayErrorPasswordMatch(true);
    }
  };

  const handleSubmit = () => {
    if (!validatePassword()) {
      setDisplayErrorPassword(true);
    } else {
      setDisplayErrorPassword(false);
      router.push({
        pathname: 'SignUp/Address',
        params: { name, email, password },
      });
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
        />
      </View>

      <View>
        <Text style={styles.errorMessage}>
          {' '}
          {displayErrorPassword
            ? 'Your password needs at least six characters!'
            : ' '}{' '}
        </Text>
      </View>

      <View>
        <Text style={styles.errorMessage}>
          {' '}
          {displayErrorPasswordMatch
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
