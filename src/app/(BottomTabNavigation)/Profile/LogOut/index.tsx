import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import SignOut from '../../../../../assets/sign-out.svg';
import X from '../../../../../assets/x.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../../Components/AuthButton/AuthButton';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { inputScreenStyles } from '../../../../styles/inputScreen';

export default function LogOutConfirmation() {
  const { signOut } = useSession();

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={fonts.tabHeading}>
          Are you sure you'd like to log out?
        </Text>

        <View style={inputScreenStyles.inlineInputContainer}>
          <ButtonWhite
            onPress={() => router.back()}
            $centeredContent
            $halfWidth
          >
            <View style={inputScreenStyles.groupButtonContent}>
              <X />
              <Text style={fonts.blackButton}>Cancel</Text>
            </View>
          </ButtonWhite>

          <ButtonBlack onPress={() => signOut()} $centeredContent $halfWidth>
            <View style={inputScreenStyles.groupButtonContent}>
              <SignOut />
              <Text style={fonts.whiteButton}>Confirm</Text>
            </View>
          </ButtonBlack>
        </View>
      </View>
    </View>
  );
}
