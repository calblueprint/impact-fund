import { useLocalSearchParams, router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';

export default function SignUpScreen() {
  const { fullName } = useLocalSearchParams() as unknown as {
    fullName: string;
  };
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');

  const [queryLoading, setQueryLoading] = useState<boolean>(false);

  const validateAddressInputs = (): boolean => {
    return (
      streetAddress.trim() !== '' ||
      city.trim() !== '' ||
      state.trim() !== '' ||
      zipCode.trim() !== ''
    );
  };

  const handleSubmit = () => {
    setQueryLoading(true);
    if (validateAddressInputs()) {
      router.push({
        pathname: 'SignUp/Password',
        params: {
          fullName,
          streetAddress: streetAddress.trim(),
          city: city.trim(),
          state: state.trim(),
          zipCode: zipCode.trim(),
        },
      });
    }
    setQueryLoading(false);
  };

  return (
    <View style={device.safeArea}>
      <View style={input.screenContainer}>
        <View style={input.instructionContainer}>
          <Text style={fonts.headline}>Next, enter your address.</Text>
        </View>

        <View style={input.inputBoxContainer}>
          <AuthInput
            input={streetAddress}
            onChangeInput={setStreetAddress}
            labelText="Street address"
            placeholderText="Street address"
            isPassword={false}
            keyboard="default"
            autoCapitalization
          />

          <AuthInput
            input={city}
            onChangeInput={setCity}
            labelText="City"
            placeholderText="City"
            isPassword={false}
            keyboard="default"
            autoCapitalization
          />

          <View style={input.inlineInputContainer}>
            <AuthInput
              input={state}
              onChangeInput={setState}
              labelText="State"
              placeholderText="State"
              isPassword={false}
              keyboard="default"
              autoCapitalization
              isHalfWidth
            />

            <AuthInput
              input={zipCode}
              onChangeInput={setZipCode}
              labelText="Zipcode"
              placeholderText="Zipcode"
              isPassword={false}
              keyboard="default"
              autoCapitalization
              isHalfWidth
            />
          </View>
        </View>

        <View style={input.inputScreenGap} />

        <ButtonBlack
          disabled={
            streetAddress.trim() === '' ||
            city.trim() === '' ||
            state.trim() === '' ||
            zipCode.trim() === '' ||
            queryLoading
          }
          onPress={() => handleSubmit()}
        >
          <Text style={fonts.whiteButton}>Continue</Text>
          {queryLoading ? <ActivityIndicator /> : <Arrow />}
        </ButtonBlack>
      </View>
    </View>
  );
}
