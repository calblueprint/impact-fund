import { useLocalSearchParams, router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Check from '../../../../../assets/check-circle.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { SafeArea, ContentContainer } from '../../../../styles/global';
import { input } from '../../../../styles/input';

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
    <SafeArea>
      <ContentContainer>
        <View style={input.instructionContainer}>
          <Text style={fonts.headline}>Last, enter your address.</Text>
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
              input={state}
              onChangeInput={onChangeState}
              labelText="State"
              placeholderText="State"
              isPassword={false}
              keyboard="default"
              autoCapitalization
            />

            <AuthInput
              input={zipcode}
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
          disabled={
            streetAddress.trim() === '' ||
            city.trim() === '' ||
            state.trim() === '' ||
            zipcode.trim() === ''
          }
          onPress={() => handleSubmit()}
          $centeredContent
        >
          <View style={input.groupButtonContent}>
            <Text style={fonts.whiteButton}>Sign Up</Text>
            <Check />
          </View>
        </ButtonBlack>
      </ContentContainer>
    </SafeArea>
  );
}
