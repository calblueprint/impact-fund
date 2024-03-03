import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { z } from 'zod';

import styles from './styles';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import supabase from '../../../../supabase/createClient';

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

  const handleSubmit = async () => {
    if (validateName() && validateEmail()) {
      setErrorMessage('hello');
      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: false,
        },
      });
      if (error) {
        //setErrorMessage(error.message);
        console.log(error);
        return;
      }
      if (data?.user) {
        setErrorMessage('USER ALREADY EXISTS!');
        return;
      }
      router.push({
        pathname: 'OTPFlow/OTPVerify',
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
      {/* <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: 'OTPFlow/OTPVerify',
            params: { name, email },
          })
        }
      >
        <Text>HELLO</Text>
      </TouchableOpacity> */}
      <View>
        <Text style={styles.errorMessage}>
          {errorExists ? errorMessage : ' '}
        </Text>
      </View>
      <TouchableOpacity
        disabled={name.trim() === '' || email.trim() === '' || errorExists}
        style={
          name.trim() === '' || email.trim() === '' || errorExists
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
