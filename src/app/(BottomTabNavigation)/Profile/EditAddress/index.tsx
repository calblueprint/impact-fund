import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import Submit from '../../../../../assets/submit.svg';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';

function EditNameScreen() {
  const { updateUser, session } = useSession();
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [usState, setUsState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zipcode, setZipcode] = useState<string>('');

  const [errorExists, setErrorExists] = useState<boolean>(false);

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
    setUsState(text);
  };

  const onChangeZipcode = (text: string) => {
    setErrorExists(false);
    setZipcode(text);
  };

  const handleSubmit = () => {
    if (streetAddress && city && usState && zipcode && !errorExists) {
      updateUser({
        data: {
          streetName: streetAddress,
          city,
          state: usState,
          zipcode,
        },
      });
      router.push('/Profile/');
    } else {
      //ask josh about case of invalid address
    }
  };

  useEffect(() => {
    setStreetAddress(session?.user?.user_metadata.streetName);
    setUsState(session?.user?.user_metadata.state);
    setCity(session?.user?.user_metadata.city);
    setZipcode(session?.user?.user_metadata.zip);
  }, []);

  return (
    <View style={styles.container}>
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
            input={usState}
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
        disabled={!streetAddress || !city || !usState || !zipcode}
        style={
          streetAddress && city && usState && zipcode
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
