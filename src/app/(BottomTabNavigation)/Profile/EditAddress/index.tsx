import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import Submit from '../../../../../assets/submit.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';

export default function EditAddressScreen() {
  const { updateUser, session } = useSession();
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [usState, setUsState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');

  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [queryLoading, setQueryLoading] = useState<boolean>(false);

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
    setZipCode(text);
  };

  const handleSubmit = async () => {
    setQueryLoading(true);
    setErrorExists(false);
    if (streetAddress && city && usState && zipCode) {
      const error = await updateUser({
        data: {
          streetAddress,
          city,
          state: usState,
          zipCode,
        },
      });
      if (error) {
        setErrorExists(true);
        setErrorMessage(error.message);
      } else {
        router.back();
      }
    }
    setQueryLoading(false);
  };

  useEffect(() => {
    setStreetAddress(session?.user?.user_metadata.streetAddress);
    setUsState(session?.user?.user_metadata.state);
    setCity(session?.user?.user_metadata.city);
    setZipCode(session?.user?.user_metadata.zipCode);
  }, []);

  return (
    <View style={device.safeArea}>
      <View style={input.screenContainer}>
        <View style={input.instructionContainer}>
          <Text style={fonts.headline}>Edit account details</Text>
        </View>

        <View style={input.inputBoxContainer}>
          <AuthInput
            input={streetAddress}
            onChangeInput={onChangeStreetAddress}
            labelText="Street address"
            placeholderText="Street address"
            isPassword={false}
            keyboard="default"
            autoCapitalization
          />

          <AuthInput
            input={city}
            onChangeInput={onChangeCity}
            labelText="City"
            placeholderText="City"
            isPassword={false}
            keyboard="default"
            autoCapitalization
          />

          <View style={input.inlineInputContainer}>
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
            <AuthInput
              input={zipCode}
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

        <View style={input.errorMessageContainer}>
          <Text style={fonts.errorMessage}>
            {errorExists ? errorMessage : ''}
          </Text>
        </View>

        <ButtonBlack
          disabled={
            !streetAddress || !city || !usState || !zipCode || queryLoading
          }
          onPress={handleSubmit}
          $centeredContent
        >
          <View style={input.groupButtonContent}>
            <Text style={fonts.whiteButton}>Submit</Text>
            {queryLoading ? <ActivityIndicator /> : <Submit />}
          </View>
        </ButtonBlack>
      </View>
    </View>
  );
}
