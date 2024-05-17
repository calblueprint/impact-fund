import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import Submit from '../../../../../assets/submit.svg';
import { ButtonBlack } from '../../../../components/AuthButton/AuthButton';
import AuthInput from '../../../../components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';

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

        <View style={input.inputScreenGap} />

        <ButtonBlack
          disabled={!fullName || fullName.trim() === ''}
          onPress={updateName}
          $centeredContent
        >
          <View style={input.groupButtonContent}>
            <Text style={fonts.whiteButton}>Submit</Text>
            <Submit />
          </View>
        </ButtonBlack>
      </View>
    </View>
  );
}
