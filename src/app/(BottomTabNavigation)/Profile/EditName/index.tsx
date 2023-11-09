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
  const [firstName, setFirstName] = useState<string>();
  const [middleName, setMiddleName] = useState<string | null>();
  const [lastName, setLastName] = useState<string>();
  useEffect(() => {
    getCurrentUserInfo().then(result => {
      setCurrSession(result);
      setFirstName(result.firstName);
      setMiddleName(result.middleName);
      setLastName(result.lastName);
    });
  }, []);
  return (
    <View>
      <Text>Edit Name {currSession.firstName}</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        value={middleName ? middleName : ''}
        onChangeText={setMiddleName}
        placeholder="Middle Name"
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
            updateCurrUserName(firstName, middleName, lastName);
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
