import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import SignOut from '../../../../../assets/sign-out.svg';
import X from '../../../../../assets/x.svg';
// import CasesHeader from '../../../../Components/CasesHeader/CasesHeader'; address in future PR
import { useSession } from '../../../../context/AuthContext';
function LogOutConfirmation() {
  const { signOut, session } = useSession();

  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <View style={styles.screenContainer}>
          {/* <View style={styles.headerContainer}>
            <CasesHeader />
          </View> */}

          <View style={styles.textContainer}>
            <Text style={styles.topText}>
              Are you sure you'd like to log out?
            </Text>
          </View>

          <View style={styles.spaceBetween} />

          <View style={styles.buttonContainer}>
            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={() => router.push('/Profile')}
                style={styles.cancelButton}
              >
                <View style={styles.buttonContent}>
                  <X />
                  <Text style={styles.cancelText}>Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonView}>
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
          <View style={styles.spaceBetween} />
        </View>
      </View>
    </View>
  );
}
export default LogOutConfirmation;
