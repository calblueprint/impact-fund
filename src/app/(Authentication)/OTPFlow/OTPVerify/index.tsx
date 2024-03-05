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

  const verify = async (email: string, token: string) => {
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email',
    });
    if (error) {
      console.log(error);
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
        {/* <AuthInput
          input={token}
          onChangeInput={setToken}
          labelText=""
          placeholderText="Enter passcode Here"
          isPassword={false}
          keyboard="numeric"
          autoCapitalization={false}
        /> */}
      </View>
      <View style={styles.bottomStuff}>
        <TouchableOpacity
          style={styles.resendButton}
          onPress={() => resendOtp(email)}
        >
          <Text style={styles.resendText}>
            Oh no! I didn't receive an email.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => verify(email, token)}
        >
          <Text>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
