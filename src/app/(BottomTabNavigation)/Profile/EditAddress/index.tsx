import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import {
  getCurrentUserInfo,
  updateCurrUserAddress,
} from '../../../../supabase/queries/auth';

function EditNameScreen() {
  const [streetName, setStreetName] = useState<string>();
  const [usState, setUsState] = useState<string>();
  const [city, setCity] = useState<string>();
  const [zip, setZip] = useState<string>();
  useEffect(() => {
    getCurrentUserInfo().then(result => {
      setStreetName(result.streetName);
      setUsState(result.state);
      setCity(result.city);
      setZip(result.zip);
    });
  }, []);
  return (
    <View>
      <Text>Edit Address</Text>
      <TextInput
        style={styles.input}
        value={streetName}
        onChangeText={setStreetName}
        placeholder="Input Street Name"
      />
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="Input City Here"
      />
      <TextInput
        style={styles.input}
        value={usState}
        onChangeText={setUsState}
        placeholder="Input State Here"
      />
      <TextInput
        style={styles.input}
        value={zip}
        onChangeText={setZip}
        placeholder="Input Zip Code Here"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (streetName && city && usState && zip) {
            updateCurrUserAddress(streetName, city, usState, zip);
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
