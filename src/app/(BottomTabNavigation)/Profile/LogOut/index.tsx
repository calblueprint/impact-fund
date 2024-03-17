import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import SignOut from '../../../../../assets/sign-out.svg';
import X from '../../../../../assets/x.svg';
import { useSession } from '../../../../context/AuthContext';
function LogOutConfirmation() {
  const { signOut } = useSession();

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.topText}>
            Are you sure you'd like to log out?
          </Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => router.push('/Profile')}
              style={styles.cancelButton}
            >
              <View style={styles.buttonContent}>
                <X />
                <Text style={styles.cancelText}>Cancel</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => signOut()}
              style={styles.confirmButton}
            >
              <View style={styles.buttonContent}>
                <SignOut />
                <Text style={styles.confirmText}>Confirm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
export default LogOutConfirmation;
