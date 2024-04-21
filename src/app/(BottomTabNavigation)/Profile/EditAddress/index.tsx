import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import BackButton from '../../../../../assets/back-button.svg';
import Submit from '../../../../../assets/submit.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
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
      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/Profile/')}
        >
          <BackButton />
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
          <View style={styles.smallInput}>
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
          disabled={!streetAddress || !city || !usState || !zipcode}
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>
            Submit
            <Submit style={styles.submitIcon} />
          </Text>
        </ButtonBlack>
      </View>
    </View>
  );
}
export default EditNameScreen;
