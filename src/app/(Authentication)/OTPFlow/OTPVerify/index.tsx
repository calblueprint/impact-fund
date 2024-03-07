import { useLocalSearchParams } from 'expo-router';
import { router } from 'expo-router/src/imperative-api';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

import styles from './styles';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { colors } from '../../../../styles/colors';
import supabase from '../../../../supabase/createClient';
import { resendOtp } from '../../../../supabase/queries/auth';

export default function OTPFlow() {
  const { name } = useLocalSearchParams() as unknown as { name: string };
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const { password } = useLocalSearchParams() as unknown as {
    password: string;
  };
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState(' ');
  const [errExists, setErrExists] = useState(false);

  const verify = async (email: string, token: string) => {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email',
    });
    if (error) {
      //setErrExists(true);
      setErrorMessage(
        'Sorry! The verification code was incorrect. Try again, or make sure you used a valid email.',
      );
      return;
    }
    router.push({
      pathname: 'SignUp/Address',
      params: { email, password, name },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.otpInput}>
        <Text style={styles.instructionText}>
          Enter the password sent to {email}
        </Text>
        <OTPTextInput
          // ref={otpInput}
          inputCount={6}
          tintColor={colors.darkGrey}
          defaultValue={token}
          inputCellLength={1}
          handleTextChange={setToken}
          // containerStyle={styles.otpContainerStyle}
          // textInputStyle={styles.otpTextInputStyle}
          // isValid={!showErrorMessage}

          keyboardType="number-pad"
          autoFocus={false}
        />
        <View style={styles.resendContainer}>
          <Text>Didn't receive a code? Go back to confirm your email or </Text>
          <TouchableOpacity onPress={() => resendOtp(email)}>
            <Text style={styles.resendText}>tap here to resend code.</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomStuff}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => verify(email, token)}
        >
          <Text>Verify</Text>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
