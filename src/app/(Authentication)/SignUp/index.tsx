import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import { signUpUser } from '../../../supabase/queries/auth';

export default function SignUpScreen() {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [streetName, setStreetName] = useState<string>('');
  const [usState, setUsState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Full Legal name"
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={streetName}
        onChangeText={setStreetName}
        placeholder="Street Name"
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="City"
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        value={usState}
        onChangeText={setUsState}
        placeholder="State"
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        value={zip}
        onChangeText={setZip}
        placeholder="Zip Code"
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={confirmPassword} // should this be another state variable
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          signUpUser(fullName, email, password, streetName, city, usState, zip)
        }
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
