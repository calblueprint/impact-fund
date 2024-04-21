import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import Arrow from '../../../../../assets/right-arrow-white.svg';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
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
        setErrorMessage(error.message);
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
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.instructionText}>
            Please enter the email you used to create your account.
          </Text>
        </View>

        <View style={styles.inputBox}>
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

        <View style={styles.errorMessageBox}>
          <Text style={styles.errorMessageText}>
            {errorExists ? errorMessage : ' '}
          </Text>
        </View>

        <View style={styles.nextLine}>
          <TouchableOpacity
            disabled={email === '' || errorExists}
            style={
              email === '' || errorExists
                ? [styles.nextButtonBase, styles.nextButtonDisabled]
                : [styles.nextButtonBase, styles.nextButtonActive]
            }
            onPress={getOTP}
          >
            <Text style={styles.nextText}>Continue</Text>
            <Arrow />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
