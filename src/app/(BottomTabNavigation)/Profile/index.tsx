import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { signOutUser } from '../../../supabase/queries/auth';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the /Profile/index screen!</Text>
      <TouchableOpacity onPress={() => signOutUser()} style={styles.button}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;
