import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import styles from './styles';
import SignOut from '../../../../../assets/sign-out.svg';
import X from '../../../../../assets/x.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../../Components/AuthButton/AuthButton';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';

export default function LogOutConfirmation() {
  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [queryLoading, setQueryLoading] = useState<boolean>(false);
  const { signOut } = useSession();

  const handleSubmit = async () => {
    setQueryLoading(true);
    const error = await signOut();
    if (error) {
      setErrorExists(true);
      setErrorMessage(error.message);
    }
    setQueryLoading(false);
  };

  return (
    <View style={[device.safeArea, { justifyContent: 'flex-end' }]}>
      <View style={[input.errorMessageContainer, { paddingHorizontal: 29 }]}>
        <Text style={fonts.errorMessage}>
          {errorExists ? errorMessage : ''}
        </Text>
      </View>

      <View style={styles.logOutContainer}>
        <Text style={fonts.tabHeading}>
          Are you sure you'd like to log out?
        </Text>

        <View style={input.inlineInputContainer}>
          <ButtonWhite
            onPress={() => router.back()}
            $centeredContent
            $halfWidth
          >
            <View style={input.groupButtonContent}>
              <X />
              <Text style={fonts.blackButton}>Cancel</Text>
            </View>
          </ButtonWhite>

          <ButtonBlack
            onPress={handleSubmit}
            disabled={queryLoading}
            $centeredContent
            $halfWidth
          >
            <View style={input.groupButtonContent}>
              {queryLoading ? <ActivityIndicator /> : <SignOut />}
              <Text style={fonts.whiteButton}>Confirm</Text>
            </View>
          </ButtonBlack>
        </View>
      </View>
    </View>
  );
}
