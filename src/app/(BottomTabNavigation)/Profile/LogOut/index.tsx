import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
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

        <View style={styles.buttonsContainer}>
          <ButtonWhite
            onPress={() => router.push('/Profile')}
            style={styles.cancelButton}
          >
            {/* <View style={styles.buttonContent}> */}
            {/* <X /> */}
            <ButtonTextBlack style={styles.cancelText}>Cancel</ButtonTextBlack>
            {/* </View> */}
          </ButtonWhite>

          <ButtonBlack onPress={() => signOut()} style={styles.confirmButton}>
            <View style={styles.buttonContent}>
              <SignOut />
              <Text style={styles.confirmText}>Confirm</Text>
            </View>
          </ButtonBlack>
        </View>
      </View>
    </View>
  );
}
export default LogOutConfirmation;
