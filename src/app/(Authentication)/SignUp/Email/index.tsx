import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { z } from 'zod';

import styles from './styles';
import AuthInput from '../../../../Components/AuthInput/AuthInput';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [displayErrorPassword, setDisplayErrorPassword] = useState(false);

  const [displayName, setDisplayName] = useState(false);
  const [placeholderName, setPlaceholderName] = useState('Full name');

  const [displayEmail, setDisplayEmail] = useState(false);
  const [placeholderEmail, setPlaceholderEmail] = useState('Email address');

  const validateEmail = () => {
    try {
      const emailSchema = z.string().email();
      emailSchema.parse(email);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const handleSubmit = () => {
    if (!validateEmail()) {
      setDisplayErrorPassword(true);
    } else {
      setDisplayErrorPassword(false);
      router.push({
        pathname: 'SignUp/Password',
        params: { name, email },
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

      <View>
        <Text style={styles.errorMessage}>
          {' '}
          {displayErrorPassword ? 'Sorry! Invalid email address.' : ' '}{' '}
        </Text>
      </View>

      <TouchableOpacity style={[styles.nextButton]} onPress={handleSubmit}>
        <Text style={styles.nextText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
