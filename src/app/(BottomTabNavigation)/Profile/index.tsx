import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { signOutUser, getCurrentUser } from '../../../supabase/queries/auth';

function ProfileScreen() {
  const [currSession, setCurrSession] = useState(null);

  useEffect(() => {
    console.log('current User', getCurrentUser());
  }, []);

  return (
    <View style={styles.container}>
      <Text>This is the /Profile/index screen!</Text>
      <TouchableOpacity onPress={() => signOutUser()} style={styles.button}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Edit Account</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;
