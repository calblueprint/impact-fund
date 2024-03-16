import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
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
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.instructionText}>
            Are you sure you want to reset the password associated with the
            email {email}?
          </Text>
        </View>
        <View style={styles.nextButton}>
          <TouchableOpacity
            //disabled={email === '' || errorExists}
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
