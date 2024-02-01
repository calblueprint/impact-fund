import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import WhiteTrash from '../../../../../assets/white-trash.svg';
import X from '../../../../../assets/x.svg';
import CasesHeader from '../../../../Components/CasesHeader/CasesHeader';
import {
  deleteCurrentUser,
  getCurrentUserInfo,
  signOutUser,
} from '../../../../supabase/queries/auth';
import { userInstance, User } from '../../../../types/types';

function DeleteAccountScreen() {
  const [currSession, setCurrSession] = useState<User>(userInstance);

  useEffect(() => {
    getCurrentUserInfo().then(result => {
      setCurrSession(result);
    });
  }, []);

  const deleteAccount = () => {
    deleteCurrentUser(currSession.id);
    signOutUser();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CasesHeader />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.topText}>Delete account?</Text>
        <Text style={styles.blurb}>
          Deleting your account will also permanently delete any data assoicated
          with it. This action cannot be undone.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.cancelButton}
        >
          <X />
          <View style={styles.gap} />
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <View style={styles.gap} />
        <TouchableOpacity onPress={deleteAccount} style={styles.confirmButton}>
          <WhiteTrash />
          <View style={styles.gap} />
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default DeleteAccountScreen;
