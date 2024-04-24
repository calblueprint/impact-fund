import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import WhiteTrash from '../../../../../assets/white-trash.svg';
import X from '../../../../../assets/x.svg';
import { useSession } from '../../../../context/AuthContext';
function DeleteAccountScreen() {
  const { signOut, deleteCurrentUser, session } = useSession();

  const deleteAccount = () => {
    if (session?.user.id) {
      deleteCurrentUser(session.user.id);
    }
    signOut();
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.topText}>Delete account?</Text>
          <Text style={styles.blurb}>
            Deleting your account will also permanently delete any data
            assoicated with it. This action cannot be undone.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => router.back()}
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
              onPress={deleteAccount}
              style={styles.confirmButton}
            >
              <View style={styles.buttonContent}>
                <WhiteTrash />
                <Text style={styles.confirmText}>Confirm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
export default DeleteAccountScreen;
