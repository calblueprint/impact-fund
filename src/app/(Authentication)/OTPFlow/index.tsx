import { useLocalSearchParams } from 'expo-router';
import { router } from 'expo-router/src/imperative-api';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import AuthInput from '../../../Components/AuthInput/AuthInput';
import supabase from '../../../supabase/createClient';

export default function OTPFlow() {
  const { name } = useLocalSearchParams() as unknown as { name: string };
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const [token, setToken] = useState('');

  const verify = async (email: string, token: string) => {
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email',
    });
    if (error) {
      console.log('you did something wrong lmao');
      return;
    }
    router.push({
      pathname: 'SignUp/Password',
      params: { name, email },
    });
  };
  return (
    <View style={styles.container}>
      <Text>Enter the password sent to {email}</Text>
      <AuthInput
        input={token}
        onChangeInput={setToken}
        labelText=""
        placeholderText="Enter OTP Here"
        isPassword={false}
        keyboard="numeric"
        autoCapitalization={false}
      />
      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => verify(email, token)}
      >
        <Text>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}
