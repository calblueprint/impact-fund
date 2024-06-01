import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';

export default function NameScreen() {
  const [fullName, setFullName] = useState<string>('');

  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [queryLoading, setQueryLoading] = useState<boolean>(false);

  const onChangeName = (text: string) => {
    setErrorExists(false);
    setFullName(text);
  };

  const handleSubmit = () => {
    setQueryLoading(true);
    const trimmed = fullName.trim();
    if (trimmed.length !== 0) {
      router.push({
        pathname: 'SignUp/Address',
        params: { fullName: trimmed },
      });
    } else {
      setErrorExists(true);
      setErrorMessage('You must input a valid name!');
    }
    setQueryLoading(false);
  };

  return (
    <View style={device.safeArea}>
      <View style={input.screenContainer}>
        <View style={input.instructionContainer}>
          <Text style={fonts.headline}>Begin by entering your name.</Text>
          <Text style={fonts.greySmall}>
            We must collect some of your information in the following screens.
          </Text>
        </View>

        <View style={input.inputBoxContainer}>
          <AuthInput
            input={fullName}
            onChangeInput={onChangeName}
            labelText="Full Name"
            placeholderText="Full Name"
            isPassword={false}
            keyboard="default"
            autoCapitalization
          />
        </View>

        <View style={input.errorMessageContainer}>
          <Text style={fonts.errorMessage}>
            {errorExists ? errorMessage : ' '}
          </Text>
        </View>

        <ButtonBlack
          disabled={fullName.trim() === '' || errorExists || queryLoading}
          onPress={handleSubmit}
        >
          <Text style={fonts.whiteButton}>Continue</Text>
          {queryLoading ? <ActivityIndicator /> : <Arrow />}
        </ButtonBlack>
      </View>
    </View>
  );
}
