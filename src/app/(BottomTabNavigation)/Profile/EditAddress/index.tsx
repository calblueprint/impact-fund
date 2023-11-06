import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import {
  getCurrentUserInfo,
  updateCurrUserAddress,
} from '../../../../supabase/queries/auth';

function EditNameScreen() {
  const [currSession, setCurrSession] = useState<any>(null);
  const [address, setAddress] = useState<string>();
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
        setAddress(userInfo.address);
      } else {
        setCurrSession(null);
      }
    });
  }, []);
  return (
    <View>
      <Text>Edit Address {currSession?.mailingAddress}</Text>
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
