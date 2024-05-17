import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../components/AuthButton/AuthButton';
import AuthInput from '../../../../components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';
import { emailExists } from '../../../../supabase/queries/auth';

export default function OTPEmailInput() {
  const [email, setEmail] = useState<string>('');
  const { sendOtp } = useSession();

  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangeEmail = (text: string) => {
    setErrorExists(false);
    setErrorMessage(' ');
    setEmail(text);
  };

  async function getOTP() {
    setErrorExists(true);
    const isEmail = await emailExists(email);
    if (!isEmail) {
      setErrorMessage(
        'The email you entered is either incorrect or not registered with the Impact Fund.',
      );
    } else {
      const { error } = await sendOtp(email);
      if (error) {
        setErrorMessage('Sorry, you can only send a code every 60 seconds!');
        return;
      }
      router.push({
        pathname: '/OTPFlow/OTPVerify',
        params: { email, changePassword: 'yes' },
      });
      setErrorExists(false);
    }
  }

  return (
    <View style={device.safeArea}>
      <View style={device.content}>
        <View style={input.instructionContainer}>
          <Text style={fonts.headline}>
            Please enter the email you used to create your account.
          </Text>
        </View>

        <View style={input.inputBoxContainer}>
          <AuthInput
            input={email}
            onChangeInput={onChangeEmail}
            labelText="Email"
            placeholderText="Email"
            isPassword={false}
            keyboard="default"
            autoCapitalization={false}
          />
        </View>

        <View style={input.errorMessageContainer}>
          <Text style={fonts.errorMessage}>
            {errorExists ? errorMessage : ' '}
          </Text>
        </View>

        <ButtonBlack disabled={email === '' || errorExists} onPress={getOTP}>
          <Text style={fonts.whiteButton}>Continue</Text>
          <Arrow />
        </ButtonBlack>
      </View>
    </View>
  );
}
