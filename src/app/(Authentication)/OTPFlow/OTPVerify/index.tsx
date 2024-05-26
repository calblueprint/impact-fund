import { useLocalSearchParams, router } from 'expo-router';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

import styles from './styles';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import { useSession } from '../../../../context/AuthContext';
import { colors } from '../../../../styles/colors';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';

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
      setErrorMessage(error.message);
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
    <View style={device.safeArea}>
      <View style={input.screenContainer}>
        <View style={input.instructionContainer}>
          <Text style={fonts.headline}>Enter verification code.</Text>
          <Text style={fonts.greySmall}>We've sent it to {email}</Text>
        </View>

        <View style={input.inputBoxContainer}>
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
          <Text style={fonts.greySmall}>
            Didn't receive a code? Go back to confirm your email or
          </Text>
          <TouchableOpacity onPress={() => resendOtp(email)}>
            <Text
              style={[fonts.greySmall, { textDecorationLine: 'underline' }]}
            >
              tap here to resend it.
            </Text>
          </TouchableOpacity>
        </View>

        <View style={input.errorMessageContainer}>
          <Text style={fonts.errorMessage}>{errorMessage}</Text>
        </View>

        <ButtonBlack
          disabled={token.length !== 6 || errorExists}
          onPress={() => verifyToken(token)}
        >
          <Text style={fonts.whiteButton}>Continue</Text>
          <Arrow />
        </ButtonBlack>
      </View>
    </View>
  );
}
