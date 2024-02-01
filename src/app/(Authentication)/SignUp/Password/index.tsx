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
  const [displayErrorPassword, setDisplayErrorPassword] =
    useState<boolean>(false);
  const [displayPassword, setDisplayPassword] = useState<boolean>(false);
  const [placeholderPassword, setPlaceholderPassword] =
    useState<string>('Password');
  const [passwordFilled, setPasswordFilled] = useState<boolean>(false);

  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [displayErrorPasswordMatch, setDisplayErrorPasswordMatch] =
    useState<boolean>(false);
  const [displayConfirmPassword, setDisplayConfirmPassword] =
    useState<boolean>(false);
  const [placeholderConfirmPassword, setPlaceholderConfirmPassword] =
    useState<string>('Confirm password');
  const [confirmPasswordFilled, setConfirmPasswordFilled] =
    useState<boolean>(false);

  const [isFocused, setIsFocused] = useState<boolean>(false);

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
    setDisplayErrorPassword(!lengthRegex.test(password));
    return lengthRegex.test(password);
  };

  const handleSubmit = () => {
    if (validateConfirmPassword() && validatePassword() && filled()) {
      if (validateConfirmPassword())
        router.push({
          pathname: 'SignUp/Address',
          params: { name, email, password },
        });
    }
  };

  const filled = () => {
    if (passwordFilled && confirmPasswordFilled) {
      return true;
    }
    return false;
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
          setFilled={setPasswordFilled}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
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
          setFilled={setConfirmPasswordFilled}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
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

      <TouchableOpacity
        style={
          !isFocused &&
          filled() &&
          !displayErrorPassword &&
          !displayErrorPasswordMatch
            ? styles.nextButton
            : !isFocused
            ? styles.nextButtonDown
            : styles.nextButtonGray
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
