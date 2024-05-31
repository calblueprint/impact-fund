import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import Envelope from '../../../../../assets/reset-password-envelope.svg';
import Refresh from '../../../../../assets/reset-password-refresh.svg';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import {
  ButtonBlack,
  ButtonTextWhite,
} from '../../../../Components/AuthButton/AuthButton';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';
import { instruction } from '../../../../styles/instruction';

export default function ResetConfirm() {
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const { session, sendResetOtp } = useSession();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [queryLoading, setQueryLoading] = useState<boolean>(false);

  const resetPassword = async () => {
    setQueryLoading(true);
    setErrorExists(false);
    const error = await sendResetOtp(session?.user?.email as string);
    if (error) {
      setErrorExists(true);
      setErrorMessage(error.message);
    } else {
      router.push({
        pathname: '/(Authentication)/OTPFlow/OTPVerify',
        params: { email: session?.user?.email, changePassword: 'yes' },
      });
    }
    setQueryLoading(false);
  };

  return (
    <View style={device.safeArea}>
      <View style={instruction.screenContainer}>
        <View style={instruction.contentContainer}>
          <Text style={fonts.instructionHeading}>Reset Password</Text>

          <View style={instruction.instructionContainer}>
            <View style={instruction.instructionRow}>
              <Envelope />
              <View style={instruction.textContainer}>
                <Text style={fonts.greyBody}>
                  We will send a six-digit verification code to the email that
                  is registered with your account.
                </Text>
              </View>
            </View>

            <View style={instruction.instructionRow}>
              <Refresh />
              <View style={instruction.textContainer}>
                <Text style={fonts.greyBody}>
                  Enter the code in the following screen to create your new
                  password.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={instruction.buttonsContainer}>
          <View style={input.errorMessageContainer}>
            <Text style={fonts.errorMessage}>
              {errorExists ? errorMessage : ''}
            </Text>
          </View>

          <ButtonBlack
            disabled={email === '' || queryLoading}
            onPress={resetPassword}
          >
            <ButtonTextWhite>Continue</ButtonTextWhite>
            {queryLoading ? <ActivityIndicator /> : <Arrow />}
          </ButtonBlack>
        </View>
      </View>
    </View>
  );
}
