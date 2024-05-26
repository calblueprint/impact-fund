import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { z } from 'zod';

import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';
import { emailExists } from '../../../../supabase/queries/auth';

export default function SignUpScreen() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangeName = (text: string) => {
    setErrorExists(false);
    setName(text);
  };

  // const onChangeEmail = (text: string) => {
  //   setErrorExists(false);
  //   setEmail(text);
  // };

  const validateName = (): boolean => {
    return name.length !== 0;
  };

  // const validateEmail = (): boolean => {
  //   try {
  //     const emailSchema = z.string().email();
  //     emailSchema.parse(email);
  //     setErrorExists(false);
  //     return true;
  //   } catch (error) {
  //     console.log(error);
  //     setErrorExists(true);
  //     setErrorMessage('Sorry! Invalid email address.');
  //     return false;
  //   }
  // };

  const handleSubmit = async () => {
    // const emailDoesExist = await emailExists(email);
    // if (validateName() && validateEmail() && !emailDoesExist) {
    if (validateName()) {
      router.push({
        pathname: 'SignUp/Address',
        params: { name },
      });
    } else {
      setErrorExists(true);
      setErrorMessage('Email already exists!');
    }
  };

  return (
    <View style={device.safeArea}>
      <View style={input.screenContainer}>
        <View style={input.instructionContainer}>
          <Text style={fonts.headline}>Create your account.</Text>
          <Text style={fonts.greySmall}>
            We need to collect some of your information in the following
            screens.
          </Text>
        </View>

        <View style={input.inputBoxContainer}>
          <AuthInput
            input={name}
            onChangeInput={onChangeName}
            labelText="Full Name"
            placeholderText="Full Name"
            isPassword={false}
            keyboard="default"
            autoCapitalization
          />
          {/* <AuthInput
            input={email}
            onChangeInput={onChangeEmail}
            labelText="Email address"
            placeholderText="Email address"
            isPassword={false}
            keyboard="default"
            autoCapitalization={false}
          /> */}
        </View>

        <View style={input.errorMessageContainer}>
          <Text style={fonts.errorMessage}>
            {errorExists ? errorMessage : ' '}
          </Text>
        </View>

        <ButtonBlack
          disabled={name.trim() === '' || errorExists}
          onPress={handleSubmit}
        >
          <Text style={fonts.whiteButton}>Continue</Text>
          <Arrow />
        </ButtonBlack>
      </View>
    </View>
  );
}
