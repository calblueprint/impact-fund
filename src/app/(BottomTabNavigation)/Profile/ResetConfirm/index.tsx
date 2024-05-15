import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text } from 'react-native';

import Envelope from '../../../../../assets/reset-password-envelope.svg';
import Refresh from '../../../../../assets/reset-password-refresh.svg';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import {
  ButtonBlack,
  ButtonTextWhite,
} from '../../../../Components/AuthButton/AuthButton';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { SafeArea } from '../../../../styles/global';
import { instruction } from '../../../../styles/instruction';

export default function ResetConfirm() {
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const { session, sendOtp } = useSession();
  const [errorExists, setErrorExists] = useState(false);

  const resetPassword = async () => {
    setErrorExists(true);
    const { error } = await sendOtp(session?.user?.email as string);
    if (error) {
      console.log(error.message);
      setErrorExists(false);
      return;
    }
    router.push({
      pathname: '/(Authentication)/OTPFlow/OTPVerify',
      params: { email: session?.user?.email, changePassword: 'yes' },
    });
    setErrorExists(false);
  };
  return (
    <SafeArea>
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
          <ButtonBlack
            disabled={email === '' || errorExists}
            onPress={resetPassword}
          >
            <ButtonTextWhite>Continue</ButtonTextWhite>
            <Arrow />
          </ButtonBlack>
        </View>
      </View>
    </SafeArea>
  );
}
