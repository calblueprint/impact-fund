import { useLocalSearchParams } from 'expo-router';
import { router } from 'expo-router/src/imperative-api';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

import styles from './styles';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import { useSession } from '../../../../context/AuthContext';
import { colors } from '../../../../styles/colors';

export default function OTPFlow() {
  const { changePassword } = useLocalSearchParams() as unknown as {
    changePassword: string;
  };
  const { name } = useLocalSearchParams() as unknown as { name: string };
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const { password } = useLocalSearchParams() as unknown as {
    password: string;
  };
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorExists, setErrorExists] = useState(true);
  const { verifyOtp, resendOtp } = useSession();

  const onChangeToken = (text: string) => {
    setErrorExists(false);
    setErrorMessage('');
    setToken(text);
  };

  const verifyToken = async (token: string) => {
    const { error } = await verifyOtp(email, token);
    if (error) {
      setErrorExists(true);
      setErrorMessage('Sorry! The verification code was incorrect.');
      return;
    }
    if (changePassword === 'yes') {
      router.push('OTPFlow/OTPNewPassword');
    } else {
      router.push({
        pathname: 'SignUp/Address',
        params: { email, password, name },
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.instructionContainer}>
          <Text style={styles.headerText}>Enter verification code.</Text>
          <Text style={styles.instructionText}>We've sent it to {email}</Text>
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
          Didn't receive a code? Go back to confirm your email or
          <TouchableOpacity onPress={() => resendOtp(email)}>
            <Text style={[styles.instructionText, styles.underlineText]}>
              {' '}
              tap here to resend it.
            </Text>
          </TouchableOpacity>
        </Text>

        <View style={styles.errorContainer}>
          <Text style={[styles.instructionText, styles.errorText]}>
            {errorMessage}
          </Text>
        </View>

        <ButtonBlack
          disabled={token.length !== 6 || errorExists}
          style={styles.nextButtonBase}
          onPress={() => verifyToken(token)}
        >
          <Text style={styles.buttonText}>Continue</Text>
          <View>
            <Arrow style={{ marginRight: 10 }} />
          </View>
        </ButtonBlack>
      </View>
    </View>
  );
}
