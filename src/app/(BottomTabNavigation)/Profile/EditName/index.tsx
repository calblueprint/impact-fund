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

export default function EditNameScreen() {
  const { updateUser, session } = useSession();
  const [fullName, setFullName] = useState<string>('');

  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [queryLoading, setQueryLoading] = useState<boolean>(false);

  const updateName = async () => {
    setQueryLoading(true);
    setErrorExists(false);
    const error = await updateUser({
      data: {
        fullName,
      },
    });
    if (error) {
      setErrorExists(true);
      setErrorMessage(error.message);
    } else {
      router.back();
    }
    setQueryLoading(false);
  };

  useEffect(() => {
    setFullName(session?.user?.user_metadata.fullName);
  }, []);

  return (
    <View style={device.safeArea}>
      <View style={input.screenContainer}>
        <View style={input.instructionContainer}>
          <Text style={fonts.headline}>Edit account details</Text>
        </View>

        <View style={input.inputBoxContainer}>
          <AuthInput
            input={fullName}
            onChangeInput={setFullName}
            labelText="Full name"
            placeholderText="Full name"
            isPassword={false}
            keyboard="default"
            autoCapitalization
          />
        </View>

        <View style={input.errorMessageContainer}>
          <Text style={fonts.errorMessage}>
            {errorExists ? errorMessage : ''}
          </Text>
        </View>

        <ButtonBlack
          disabled={!fullName || fullName.trim() === '' || queryLoading}
          onPress={updateName}
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
