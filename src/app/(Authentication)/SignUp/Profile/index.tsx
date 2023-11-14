import { router } from 'expo-router';
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

  const [displayName, setDisplayName] = useState(false);
  const [placeholderName, setPlaceholderName] = useState('Full name');
  const [isFocusedName, setIsFocusedName] = useState(false);

  const [displayEmail, setDisplayEmail] = useState(false);
  const [placeholderEmail, setPlaceholderEmail] = useState('Email address');
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);

  const [displayPassword, setDisplayPassword] = useState(false);
  const [placeholderPassword, setPlaceholderPassword] = useState('Password');
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const handlePasswordChange = () => {
    // Check if the password meets your requirements
    if (password.trim() === '') {
      setDisplayPassword(false);
    }
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
        params: { name, email, password },
      });
    }
  };

  // ** Display fields **
  //Name
  const onClickName = () => {
    setPlaceholderName('');
    setIsFocusedName(true);
    setDisplayName(true);
  };

  const offClickName = () => {
    setPlaceholderName('Full name');
    setIsFocusedName(false);
  };

  function removeName() {
    if (password.trim() === '') {
      setDisplayName(false);
    }
  }

  //Email
  const onClickEmail = () => {
    setPlaceholderEmail('');
    setIsFocusedEmail(true);
    setDisplayEmail(true);
  };

  const offClickEmail = () => {
    setPlaceholderEmail('Email address');
    setIsFocusedEmail(false);
  };

  function removeEmail() {
    if (password.trim() === '') {
      setDisplayEmail(false);
    }
  }

  //Password
  const onClickPassword = () => {
    setPlaceholderPassword('');
    setIsFocusedPassword(true);
    setDisplayPassword(true);
  };

  const offClickPassword = () => {
    setPlaceholderPassword('Password');
    setIsFocusedPassword(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.instructionText}>Create your account.</Text>

      <Text style={styles.displayText}>{displayName ? 'Full name' : ' '} </Text>
      <TextInput
        style={[styles.input, isFocusedName && styles.inputFocused]}
        value={name}
        onChangeText={setName}
        onEndEditing={removeName}
        onFocus={onClickName}
        onBlur={offClickName}
        placeholder={placeholderName}
        autoCapitalize="words"
        clearButtonMode="while-editing"
      />

      <Text style={styles.displayTextEmail}>
        {displayEmail ? 'Email address' : ' '}{' '}
      </Text>
      <TextInput
        style={[styles.input, isFocusedEmail && styles.inputFocused]}
        value={email}
        onChangeText={setEmail}
        onEndEditing={removeEmail}
        onFocus={onClickEmail}
        onBlur={offClickEmail}
        placeholder={placeholderEmail}
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />

      <Text style={styles.displayText}>
        {displayPassword ? 'Password' : ' '}{' '}
      </Text>
      <TextInput
        style={[styles.input, isFocusedPassword && styles.inputFocused]}
        value={password}
        onChangeText={setPassword}
        onEndEditing={handlePasswordChange}
        onFocus={onClickPassword}
        onBlur={offClickPassword}
        placeholder={placeholderPassword}
        textContentType="password"
        secureTextEntry
      />

      <View>
        <Text style={styles.errorMessage}>
          {' '}
          {displayError
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
