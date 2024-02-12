import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import Check from '../../../../../assets/check-circle.svg';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { signUpUser } from '../../../../supabase/queries/auth';

export default function SignUpScreen() {
  const { name } = useLocalSearchParams() as unknown as { name: string };
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const { password } = useLocalSearchParams() as unknown as {
    password: string;
  };
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zipcode, setZipcode] = useState<string>('');

  const onChangeStreetAddress = (text: string) => {
    setStreetAddress(text);
  };

  const onChangeCity = (text: string) => {
    setCity(text);
  };

  const onChangeState = (text: string) => {
    setState(text);
  };

  const onChangeZipcode = (text: string) => {
    setZipcode(text);
  };

  const validateAddressInputs = () => {
    if (
      streetAddress.trim() !== '' ||
      city.trim() !== '' ||
      state.trim() !== '' ||
      zipcode.trim() !== ''
    )
      return true;
  };

  const handleSubmit = () => {
    if (validateAddressInputs()) {
      signUpUser(name, email, password, streetAddress, city, state, zipcode);
      setStreetAddress('');
      setCity('');
      setState('');
      setZipcode('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.instructionText}>Last, enter your address.</Text>

      <View style={styles.inputBox}>
        <AuthInput
          input={streetAddress}
          onChangeInput={onChangeStreetAddress}
          labelText="Street address"
          placeholderText="Street address"
          isPassword={false}
          keyboard="default"
          autoCapitalization
        />
      </View>

      <View style={styles.inputBox}>
        <AuthInput
          input={city}
          onChangeInput={onChangeCity}
          labelText="City"
          placeholderText="City"
          isPassword={false}
          keyboard="default"
          autoCapitalization
        />
      </View>

      <View style={styles.stateLine}>
        <View>
          <AuthInput
            input={state}
            onChangeInput={onChangeState}
            labelText="State"
            placeholderText="State"
            isPassword={false}
            keyboard="default"
            autoCapitalization
            isHalfWidth
          />
        </View>

        <View>
          <AuthInput
            input={zipcode}
            onChangeInput={onChangeZipcode}
            labelText="Zipcode"
            placeholderText="Zipcode"
            isPassword={false}
            keyboard="default"
            autoCapitalization
            isHalfWidth
          />
        </View>
      </View>
      <Text style={styles.space}> </Text>

      <TouchableOpacity
        disabled={
          streetAddress.trim() === '' ||
          city.trim() === '' ||
          state.trim() === '' ||
          zipcode.trim() === ''
        }
        style={
          streetAddress.trim() === '' ||
          city.trim() === '' ||
          state.trim() === '' ||
          zipcode.trim() === ''
            ? styles.nextButtonGray
            : styles.nextButton
        }
        onPress={() => handleSubmit()}
      >
        <Text style={styles.nextText}>Sign Up</Text>
        <View style={styles.check}>
          <Check />
        </View>
      </TouchableOpacity>
    </View>
  );
}
