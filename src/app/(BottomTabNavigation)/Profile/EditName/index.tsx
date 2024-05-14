import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import Submit from '../../../../../assets/submit.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { ContentContainer, SafeArea } from '../../../../styles/global';
import { inputScreenStyles } from '../../../../styles/inputScreen';

export default function EditNameScreen() {
  const { updateUser, session } = useSession();
  const [fullName, setFullName] = useState<string>('');

  function updateName() {
    updateUser({
      data: {
        fullName,
      },
    });
    router.back();
  }

  useEffect(() => {
    setFullName(session?.user?.user_metadata.fullName);
  }, []);

  return (
    <SafeArea>
      <ContentContainer>
        <View style={inputScreenStyles.instructionContainer}>
          <Text style={fonts.headline}>Edit account details</Text>
        </View>

        <View style={inputScreenStyles.inputBoxContainer}>
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

        <View style={inputScreenStyles.inputScreenGap} />

        <ButtonBlack
          disabled={!fullName || fullName.trim() === ''}
          onPress={updateName}
          $centeredContent
        >
          <View style={inputScreenStyles.groupButtonContent}>
            <Text style={fonts.whiteButton}>Submit</Text>
            <Submit />
          </View>
        </ButtonBlack>
      </ContentContainer>
    </SafeArea>
  );
}
