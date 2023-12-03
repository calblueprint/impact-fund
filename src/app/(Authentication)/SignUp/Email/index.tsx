import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { z } from 'zod';

import styles from './styles';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import AuthInput from '../../../../Components/AuthInput/AuthInput';

export default function SignUpScreen() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [displayError, setDisplayError] = useState<boolean>(false);

  const [displayName, setDisplayName] = useState<boolean>(false);
  const [placeholderName, setPlaceholderName] = useState<string>('Full name');

  const [displayEmail, setDisplayEmail] = useState<boolean>(false);
  const [placeholderEmail, setPlaceholderEmail] =
    useState<string>('Email address');

  const validateEmail = () => {
    try {
      const emailSchema = z.string().email();
      emailSchema.parse(email);
      setDisplayError(false);
      return true;
    } catch (error) {
      console.log(error);
      setDisplayError(true);
      return false;
    }
  };

  const handleSubmit = () => {
    if (!displayError) {
      if (validateEmail()) {
        router.push({
          pathname: 'SignUp/Password',
          params: { name, email },
        });
      }
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
          errorHandling={false}
          setDisplayError={setDisplayError}
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
          errorHandling
          setDisplayError={setDisplayError}
        />
      </View>

      <View>
        <Text style={styles.errorMessage}>
          {' '}
          {displayError ? 'Sorry! Invalid email address.' : ' '}{' '}
        </Text>
      </View>

      <TouchableOpacity style={[styles.nextButton]} onPress={handleSubmit}>
        <Text style={styles.nextText}>Continue</Text>
        <View>
          <Arrow />
        </View>
      </TouchableOpacity>
    </View>
  );
}
