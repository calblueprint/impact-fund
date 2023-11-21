import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';
import {
  getCurrentUserInfo,
  updateCurrUserName,
} from '../../../../supabase/queries/auth';
import { User, userInstance } from '../../../../types/types';

function EditNameScreen() {
  const [currSession, setCurrSession] = useState<User>(userInstance);
  const [fullName, setFullName] = useState<string>();
  useEffect(() => {
    getCurrentUserInfo().then(result => {
      setCurrSession(result);
      setFullName(result.fullName);
    });
  }, []);
  return (
    <View>
      <Text>Edit Name {currSession.fullName}</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Full Name"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (fullName) {
            updateCurrUserName(fullName);
            router.push('/Profile/');
          } else {
            router.push('/Profile/');
          }
        }}
      >
        <Text>Update Name</Text>
      </TouchableOpacity>
    </View>
  );
}
export default EditNameScreen;
