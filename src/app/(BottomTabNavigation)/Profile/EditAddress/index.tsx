import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import {
  getCurrentUserInfo,
  updateCurrUserAddress,
} from '../../../../supabase/queries/auth';
import { User, userInstance } from '../../../../types/types';

function EditNameScreen() {
  const [currSession, setCurrSession] = useState<User>(userInstance);
  const [address, setAddress] = useState<string>();
  useEffect(() => {
    getCurrentUserInfo().then(result => {
      setCurrSession(result);
      setAddress(result.address);
    });
  }, []);
  return (
    <View>
      <Text>Edit Address {currSession.address}</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Input Address Here"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (address) {
            updateCurrUserAddress(address);
            router.push('/Profile/');
          } else {
            router.push('/Profile/');
          }
        }}
      >
        <Text>Update Address</Text>
      </TouchableOpacity>
    </View>
  );
}
export default EditNameScreen;
