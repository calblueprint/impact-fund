import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { useSession } from '../../../../context/AuthContext';
import { getCurrentUserInfo } from '../../../../supabase/queries/auth';
import { userInstance, User } from '../../../../types/types';

function DeleteAccountScreen() {
  const [currSession, setCurrSession] = useState<User>(userInstance);
  const { signOut, deleteCurrentUser } = useSession();
  useEffect(() => {
    getCurrentUserInfo().then(result => {
      setCurrSession(result);
    });
  }, []);
  return (
    <View>
      <Text>Are you sure you want to delete your account?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          deleteCurrentUser(currSession.id);
          signOut();
        }}
      >
        <Text>YES</Text>
      </TouchableOpacity>
    </View>
  );
}
export default DeleteAccountScreen;
