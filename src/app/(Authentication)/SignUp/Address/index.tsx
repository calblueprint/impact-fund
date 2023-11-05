import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import { signUpUser } from '../../../../supabase/queries/auth';

export default function SignUpScreen() {
  const name = useLocalSearchParams<{ name: string }>();
  const email = useLocalSearchParams<{ email: string }>();
  const password = useLocalSearchParams<{ password: string }>();

  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const address = streetAddress + ' ' + city + ' ' + state + ' ' + zipcode;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text>Go Back</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        value={streetAddress}
        onChangeText={setStreetAddress}
        placeholder="Street Address"
        autoCapitalize="words"
        clearButtonMode="while-editing"
      />
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="City"
        autoCapitalize="words"
        clearButtonMode="while-editing"
      />
      <TextInput
        style={styles.input}
        value={state}
        onChangeText={setState}
        placeholder="State"
        autoCapitalize="words"
        clearButtonMode="while-editing"
      />
      <TextInput
        style={styles.input}
        maxLength={5}
        value={zipcode}
        onChangeText={setZipcode}
        placeholder="Zip Code"
        keyboardType="numeric"
        clearButtonMode="while-editing"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => signUpUser(name, email, address, password)}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
