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

  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangeName = (text: string) => {
    setErrorExists(false);
    setName(text);
  };

  const onChangeEmail = (text: string) => {
    setErrorExists(false);
    setEmail(text);
  };

  const validateName = (): boolean => {
    return name.length !== 0;
  };

  const validateEmail = (): boolean => {
    try {
      const emailSchema = z.string().email();
      emailSchema.parse(email);
      setErrorExists(false);
      return true;
    } catch (error) {
      console.log(error);
      setErrorExists(true);
      setErrorMessage('Sorry! Invalid email address.');
      return false;
    }
  };

  const handleSubmit = () => {
    if (validateName() && validateEmail()) {
      router.push({
        pathname: 'SignUp/Password',
        params: { name, email },
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
      <Text style={styles.instructionText}>Create your account.</Text>
      <View style={styles.inputBox}>
        <AuthInput
          input={name}
          onChangeInput={onChangeName}
          labelText="Full Name"
          placeholderText="Full Name"
          isPassword={false}
          keyboard="default"
          autoCapitalization
        />
      </View>
      <View style={styles.inputBox}>
        <AuthInput
          input={email}
          onChangeInput={onChangeEmail}
          labelText="Email address"
          placeholderText="Email address"
          isPassword={false}
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
        disabled={name.length === 0 || email.length === 0 || errorExists}
        style={
          name.length === 0 || email.length === 0 || errorExists
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
