import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import Envelope from '../../../../../assets/reset-password-envelope.svg';
import Refresh from '../../../../../assets/reset-password-refresh.svg';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import { useSession } from '../../../../context/AuthContext';

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
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.titlText}>Reset Password</Text>

        <View style={styles.instructionContainer}>
          <View style={styles.instructionRow}>
            <Envelope />
            <Text style={styles.instructionText}>
              We will send a six-digit verification code to the email that is
              registered with your account.
            </Text>
          </View>

          <View style={styles.instructionRow}>
            <Refresh />
            <Text style={styles.instructionText}>
              Enter the code in the following screen to create your new
              password.
            </Text>
          </View>
        </View>

        <View style={styles.nextButton}>
          <TouchableOpacity
            style={
              email === '' || errorExists
                ? [styles.nextButtonBase, styles.nextButtonDisabled]
                : [styles.nextButtonBase, styles.nextButtonActive]
            }
            onPress={resetPassword}
          >
            <Text style={styles.nextText}>Continue</Text>
            <Arrow />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
