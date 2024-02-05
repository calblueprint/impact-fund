import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import Submit from '../../../../../assets/submit.svg';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import {
  getCurrentUserInfo,
  updateCurrUserAddress,
} from '../../../../supabase/queries/auth';

function EditNameScreen() {
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zipcode, setZipcode] = useState<string>('');

  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangeStreetAddress = (text: string) => {
    setErrorExists(false);
    setStreetAddress(text);
  };

  const onChangeCity = (text: string) => {
    setErrorExists(false);
    setCity(text);
  };

  const onChangeState = (text: string) => {
    setErrorExists(false);
    setState(text);
  };

  const onChangeZipcode = (text: string) => {
    setErrorExists(false);
    setZipcode(text);
  };

  const handleSubmit = () => {
    if (streetAddress && city && state && zipcode) {
      updateCurrUserAddress(streetAddress, city, state, zipcode);
      router.push('/Profile/');
    } else {
      //ask josh about case of invalid address
    }
  };

  useEffect(() => {
    getCurrentUserInfo().then(result => {
      setStreetAddress(result.streetName);
      setCity(result.city);
      setState(result.state);
      setZipcode(result.zip);
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/Profile/')}
      >
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.instructionText}>Edit account details</Text>

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

      <TouchableOpacity
        disabled={!streetAddress || !city || !state || !zipcode}
        style={
          streetAddress && city && state && zipcode
            ? styles.submitButton
            : [styles.submitButton, styles.submitButtonDisabled]
        }
        onPress={handleSubmit}
      >
        <Text style={styles.submitText}>
          Submit
          <Submit style={styles.submitIcon} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default EditNameScreen;
