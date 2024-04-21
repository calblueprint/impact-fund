import { useLocalSearchParams, router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import BackButton from '../../../../../assets/back-button.svg';
import Check from '../../../../../assets/check-circle.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';

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
  const { fullySignUpUser } = useSession();

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
      fullySignUpUser(
        name,
        email,
        password,
        streetAddress,
        city,
        state,
        zipcode,
      );
      setStreetAddress('');
      setCity('');
      setState('');
      setZipcode('');
      router.push('/');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <BackButton />
        </TouchableOpacity>
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
          <View style={styles.smallInput}>
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

          <View style={styles.smallInput}>
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

        <ButtonBlack
          disabled={
            streetAddress.trim() === '' ||
            city.trim() === '' ||
            state.trim() === '' ||
            zipcode.trim() === ''
          }
          style={styles.nextButton}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.nextText}>Sign Up</Text>
          <Check />
        </ButtonBlack>
      </View>
    </View>
  );
}
