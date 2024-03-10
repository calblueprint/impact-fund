import { useLocalSearchParams } from 'expo-router';
import { router } from 'expo-router/src/imperative-api';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

import styles from './styles';
import Arrow from '../../../../../assets/right-arrow-white.svg';
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
  const [errorMessage, setErrorMessage] = useState('');
  const [errorExists, setErrorExists] = useState(true);

  const onChangeToken = (text: string) => {
    setErrorExists(false);
    setErrorMessage('');
    setToken(text);
  };

  const verify = async (email: string, token: string) => {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email',
    });
    if (error) {
      setErrorExists(true);
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
      <View style={styles.contentContainer}>
        <View style={styles.instructionContainer}>
          <Text style={styles.headerText}>Enter verification code.</Text>
          <Text style={styles.instructionText}>
            We've just emailed it to you at {email}
          </Text>
        </View>

        <OTPTextInput
          inputCount={6}
          tintColor={colors.darkGrey}
          defaultValue={token}
          inputCellLength={1}
          handleTextChange={onChangeToken}
          containerStyle={styles.otpContainer}
          textInputStyle={styles.otpInputBoxes}
          keyboardType="number-pad"
          autoFocus={false}
        />

        <Text style={styles.instructionText}>
          Didn't receive a code? Go back to confirm your email or{' '}
          <TouchableOpacity onPress={() => resendOtp(email)}>
            <Text style={[styles.instructionText, styles.underlineText]}>
              press here to resend code.
            </Text>
          </TouchableOpacity>
        </Text>

        <View style={styles.errorContainer}>
          <Text style={[styles.instructionText, styles.errorText]}>
            {errorMessage}
          </Text>
        </View>

        <TouchableOpacity
          disabled={token.length !== 6 || errorExists}
          style={
            token.length !== 6 || errorExists
              ? [styles.nextButtonBase, styles.nextButtonDisabled]
              : [styles.nextButtonBase, styles.nextButtonActive]
          }
          onPress={() => verify(email, token)}
        >
          <Text style={styles.buttonText}>Verify</Text>
          <View>
            <Arrow />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
