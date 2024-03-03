import { useLocalSearchParams } from 'expo-router';
import { router } from 'expo-router/src/imperative-api';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { resendOtp, verifyOtp } from '../../../../supabase/queries/auth';

export default function OTPFlow() {
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const [token, setToken] = useState('');

  const verify = async (email: string, token: string) => {
    verifyOtp(email, token);
    router.push({
      pathname: 'SignUp/Password',
      params: { email },
    });
  };

  return (
    <View style={styles.container}>
      <Text>Enter the password sent to {email}</Text>
      <AuthInput
        input={token}
        onChangeInput={setToken}
        labelText=""
        placeholderText="Enter passcode Here"
        isPassword={false}
        keyboard="numeric"
        autoCapitalization={false}
      />
      <TouchableOpacity
        style={styles.resendButton}
        onPress={() => resendOtp(email)}
      >
        <Text style={styles.resendText}>Oh no! I didn't receive an email.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => verify(email, token)}
      >
        <Text>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}
