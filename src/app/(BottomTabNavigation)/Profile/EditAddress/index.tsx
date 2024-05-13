import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { inputScreenStyles } from '../../../(Authentication)/styles';
import Submit from '../../../../../assets/submit.svg';
import {
  ButtonBlack,
  ButtonTextWhite,
} from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
import { TitleText } from '../../../../styles/InputScreenStyles';
import { ContentContainer, SafeArea } from '../../../../styles/global';

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
    <SafeArea>
      <ContentContainer>
        <View style={inputScreenStyles.instructionContainer}>
          <TitleText>Edit account details</TitleText>
        </View>

        <View style={inputScreenStyles.inputBoxContainer}>
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
          <View style={inputScreenStyles.inlineInputContainer}>
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

        <View style={inputScreenStyles.inputScreenGap} />

        <ButtonBlack
          disabled={!streetAddress || !city || !usState || !zipcode}
          $centeredContent
          onPress={handleSubmit}
        >
          <View style={inputScreenStyles.groupButtonContent}>
            <ButtonTextWhite>Submit</ButtonTextWhite>
            <Submit />
          </View>
        </ButtonBlack>
      </ContentContainer>
    </SafeArea>
  );
}
export default EditNameScreen;
