import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';
import {
  getCurrentUserInfo,
  updateCurrUserName,
} from '../../../../supabase/queries/auth';

function EditNameScreen() {
  const [currSession, setCurrSession] = useState<any>(null);
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  useEffect(() => {
    getCurrentUserInfo().then(result => {
      if (result) {
        const userInfo = {
          email: result.email,
          firstName: result.user_metadata.firstName,
          lastName: result.user_metadata.lastName,
          address: result.user_metadata.address,
          id: result.id,
        };
        setCurrSession(userInfo);
        setFirstName(userInfo.firstName);
        setLastName(userInfo.lastName);
      } else {
        setCurrSession(null);
      }
    });
  }, []);
  return (
    <View>
      <Text>Edit Name {currSession?.firstName}</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (firstName && lastName) {
            updateCurrUserName(firstName, lastName);
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
