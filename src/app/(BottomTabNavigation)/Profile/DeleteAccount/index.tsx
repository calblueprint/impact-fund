//import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import {
  deleteCurrentUser,
  getCurrentUserInfo,
  signOutUser,
} from '../../../../supabase/queries/auth';
import styles from '../styles';

function DeleteAccountScreen() {
  const [currSession, setCurrSession] = useState<any>(null);
  useEffect(() => {
    getCurrentUserInfo().then(result => {
      if (result) {
        const userInfo = {
          email: result.email,
          fullName: result.user_metadata.fullName,
          mailingAddress: result.user_metadata.mailingAddress,
          id: result.id,
        };
        setCurrSession(userInfo);
      } else {
        setCurrSession(null);
      }
    });
  }, []);
  return (
    <View>
      <Text>
        Are you sure you want to delete your account {currSession?.firstName}?
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          deleteCurrentUser(currSession?.id);
          signOutUser();
        }}
      >
        <Text>YES</Text>
      </TouchableOpacity>
    </View>
  );
}
export default DeleteAccountScreen;
