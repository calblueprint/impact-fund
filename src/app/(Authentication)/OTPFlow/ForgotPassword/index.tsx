import { useLocalSearchParams } from 'expo-router';
import { router } from 'expo-router/src/imperative-api';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import supabase from '../../../../supabase/createClient';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const forgotPasswordLol = async () => {
    console.log('what');
    const { error } = await supabase.auth.signInWithOtp({
      email,
    });
    if (error) {
      console.log(error);
      return;
    }
    router.push({
      pathname: 'OTPFlow/OTPVerify',
      params: { name: 'johnny', email },
    });
  };

  return (
    <View style={styles.container}>
      <Text>Enter your Email:</Text>
      <AuthInput
        input={email}
        onChangeInput={setEmail}
        labelText=""
        placeholderText="example@email.com"
        isPassword={false}
        keyboard="default"
        autoCapitalization={false}
      />
      <TouchableOpacity style={styles.verifyButton} onPress={forgotPasswordLol}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
