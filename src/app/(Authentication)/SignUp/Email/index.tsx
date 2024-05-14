import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { z } from 'zod';

import Arrow from '../../../../../assets/right-arrow-white.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { fonts } from '../../../../styles/fonts';
import { SafeArea, ContentContainer } from '../../../../styles/global';
import { inputScreenStyles } from '../../../../styles/inputScreen';
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

  const onChangeEmail = (text: string) => {
    setErrorExists(false);
    setEmail(text);
  };

  const validateName = (): boolean => {
    return name.length !== 0;
  };

  const validateEmail = (): boolean => {
    try {
      const emailSchema = z.string().email();
      emailSchema.parse(email);
      setErrorExists(false);
      return true;
    } catch (error) {
      console.log(error);
      setErrorExists(true);
      setErrorMessage('Sorry! Invalid email address.');
      return false;
    }
  };

  const handleSubmit = async () => {
    const emailDoesExist = await emailExists(email);
    if (validateName() && validateEmail() && !emailDoesExist) {
      router.push({
        pathname: 'SignUp/Password',
        params: { name, email },
      });
    } else {
      setErrorExists(true);
      setErrorMessage('Email already exists!');
    }
  };

  return (
    <SafeArea>
      <ContentContainer>
        <View style={inputScreenStyles.instructionContainer}>
          <Text style={fonts.headline}>Create your account.</Text>
        </View>

        <View style={inputScreenStyles.inputBoxContainer}>
          <AuthInput
            input={name}
            onChangeInput={onChangeName}
            labelText="Full Name"
            placeholderText="Full Name"
            isPassword={false}
            keyboard="default"
            autoCapitalization
          />
          <AuthInput
            input={email}
            onChangeInput={onChangeEmail}
            labelText="Email address"
            placeholderText="Email address"
            isPassword={false}
            keyboard="default"
            autoCapitalization={false}
          />
        </View>

        <View style={inputScreenStyles.errorMessageContainer}>
          <Text style={fonts.errorMessage}>
            {errorExists ? errorMessage : ' '}
          </Text>
        </View>

        <ButtonBlack
          disabled={name.trim() === '' || email.trim() === '' || errorExists}
          onPress={handleSubmit}
        >
          <Text style={fonts.whiteButton}>Continue</Text>
          <Arrow />
        </ButtonBlack>
      </ContentContainer>
    </SafeArea>
  );
}
