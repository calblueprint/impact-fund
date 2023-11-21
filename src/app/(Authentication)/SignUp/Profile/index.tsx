import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import AuthInput from '../../../../Components/AuthInput/AuthInput';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayErrorPassword, setDisplayErrorPassword] = useState(false);

  const [displayName, setDisplayName] = useState(false);
  const [placeholderName, setPlaceholderName] = useState('Full name');

  const [displayEmail, setDisplayEmail] = useState(false);
  const [placeholderEmail, setPlaceholderEmail] = useState('Email address');

  const [displayPassword, setDisplayPassword] = useState(false);
  const [placeholderPassword, setPlaceholderPassword] = useState('Password');

  const validatePassword = () => {
    // Implement your password requirements here
    const lengthRegex = /^.{6,}$/;
    return lengthRegex.test(password);
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
          input={name}
          setInput={setName}
          defaultValue="Full name"
          isPassword={false}
          displayInput={displayName}
          setDisplayInput={setDisplayName}
          keyboard="default"
          autoCapitalization
          placeholder={placeholderName}
          setPlaceholder={setPlaceholderName}
        />
      </View>

      <View style={styles.inputBox}>
        <AuthInput
          input={email}
          setInput={setEmail}
          defaultValue="Email address"
          isPassword={false}
          displayInput={displayEmail}
          setDisplayInput={setDisplayEmail}
          keyboard="default"
          autoCapitalization={false}
          placeholder={placeholderEmail}
          setPlaceholder={setPlaceholderEmail}
        />
      </View>

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

      <View>
        <Text style={styles.errorMessage}>
          {' '}
          {displayErrorPassword
            ? 'Your password needs at least six characters!'
            : ' '}{' '}
        </Text>
      </View>

      <TouchableOpacity style={[styles.nextButton]} onPress={handleSubmit}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
