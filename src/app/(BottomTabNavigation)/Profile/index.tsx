import { router } from 'expo-router';
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push('/Profile/DeleteAccount');
        }}
      >
        <Text>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/Profile/EditName')}
      >
        <Text>Edit Name</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/Profile/EditAddress')}
      >
        <Text>Edit Address</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;
