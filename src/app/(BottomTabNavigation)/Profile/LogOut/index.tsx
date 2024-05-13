import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { inputScreenStyles } from '../../../(Authentication)/styles';
import SignOut from '../../../../../assets/sign-out.svg';
import X from '../../../../../assets/x.svg';
import {
  ButtonBlack,
  ButtonTextBlack,
  ButtonTextWhite,
  ButtonWhite,
} from '../../../../Components/AuthButton/AuthButton';
import { useSession } from '../../../../context/AuthContext';

function LogOutConfirmation() {
  const { signOut } = useSession();

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.topText}>Are you sure you'd like to log out?</Text>

        <View style={inputScreenStyles.inlineInputContainer}>
          <ButtonWhite
            onPress={() => router.back()}
            $centeredContent
            $halfWidth
          >
            <View style={inputScreenStyles.groupButtonContent}>
              <X />
              <ButtonTextBlack>Cancel</ButtonTextBlack>
            </View>
          </ButtonWhite>

          <ButtonBlack onPress={() => signOut()} $centeredContent $halfWidth>
            <View style={inputScreenStyles.groupButtonContent}>
              <SignOut />
              <ButtonTextWhite>Confirm</ButtonTextWhite>
            </View>
          </ButtonBlack>
        </View>
      </View>
    </View>
  );
}
export default LogOutConfirmation;
