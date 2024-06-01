import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

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

  const handleSubmit = () => {
    if (streetAddress && city && usState && zipCode && !errorExists) {
      updateUser({
        data: {
          streetAddress,
          city,
          state: usState,
          zipCode,
        },
      });
      router.push('/Profile/');
    } else {
      //ask josh about case of invalid address
    }
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
            />
            <AuthInput
              input={zipCode}
              onChangeInput={onChangeZipcode}
              labelText="Zipcode"
              placeholderText="Zipcode"
              isPassword={false}
              keyboard="default"
              autoCapitalization
            />
          </View>
        </View>

        <View style={input.inputScreenGap} />

        <ButtonBlack
          disabled={!streetAddress || !city || !usState || !zipCode}
          onPress={handleSubmit}
          $centeredContent
        >
          <View style={input.groupButtonContent}>
            <Text style={fonts.whiteButton}>Submit</Text>
            <Submit />
          </View>
        </ButtonBlack>
      </View>
    </View>
  );
}
