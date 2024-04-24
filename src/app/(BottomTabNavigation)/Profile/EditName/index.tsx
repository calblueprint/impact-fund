import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import BackButton from '../../../../../assets/back-button.svg';
import Submit from '../../../../../assets/submit.svg';
import {
  ButtonBlack,
  ButtonTextWhite,
} from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import {
  ErrorMessageContainer,
  GroupButtonContent,
  InputBoxContainer,
  InputScreenGap,
  InstructionContainer,
  TitleText,
} from '../../../../Components/InputScreenStyles/InputScreenStyles';
import { useSession } from '../../../../context/AuthContext';
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
        <TouchableOpacity onPress={() => router.back()}>
          <BackButton />
        </TouchableOpacity>

        <InstructionContainer>
          <TitleText>Edit account details</TitleText>
        </InstructionContainer>

        <InputBoxContainer>
          <AuthInput
            input={fullName}
            onChangeInput={setFullName}
            labelText="Full name"
            placeholderText="Full name"
            isPassword={false}
            keyboard="default"
            autoCapitalization
          />
        </InputBoxContainer>

        <InputScreenGap />

        <ButtonBlack
          disabled={!fullName || fullName.trim() === ''}
          onPress={updateName}
          style={{ justifyContent: 'center' }}
        >
          <GroupButtonContent>
            <ButtonTextWhite>Submit</ButtonTextWhite>
            <Submit />
          </GroupButtonContent>
        </ButtonBlack>
      </ContentContainer>
    </SafeArea>
  );
}
export default EditNameScreen;
