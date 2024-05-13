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
          <TitleText>Edit account details</TitleText>
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
          style={{ justifyContent: 'center' }}
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
