import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  const handlePasswordChange = () => {
    // Check if the password meets your requirements
    const isPasswordValid = validatePassword();
    setPasswordValid(isPasswordValid);
  };

  const validatePassword = () => {
    // Implement your password requirements here
    const lengthRegex = /^.{6,}$/;
    return lengthRegex.test(password);
  };

  const handleSubmit = () => {
    if (!passwordValid) {
      setDisplayError(true);
    } else {
      setDisplayError(false);
      router.push({
        pathname: 'SignUp/Address',
        params: name,
        email,
        password,
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text>Go Back</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Full name"
        autoCapitalize="words"
        clearButtonMode="while-editing"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        textContentType="emailAddress"
        placeholder="Email address"
        keyboardType="email-address"
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        onEndEditing={handlePasswordChange}
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />

      <View>
        <Text>
          {' '}
          {displayError
            ? 'Your password needs at least six characters!'
            : ' '}{' '}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
