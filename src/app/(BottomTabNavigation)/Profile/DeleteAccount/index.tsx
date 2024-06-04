import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import styles from './styles';
import WhiteTrash from '../../../../../assets/white-trash.svg';
import X from '../../../../../assets/x.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../../Components/AuthButton/AuthButton';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';
import { instruction } from '../../../../styles/instruction';

export default function DeleteAccountScreen() {
  const [errorExists, setErrorExists] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [queryLoading, setQueryLoading] = useState<boolean>(false);
  const { deleteCurrentUser, session } = useSession();

  const deleteAccount = async () => {
    setQueryLoading(true);
    setErrorExists(false);
    if (session?.user.id) {
      const error = await deleteCurrentUser(session?.user.id);
      if (error) {
        setErrorExists(true);
        setErrorMessage(error.message);
      }
    } else {
      setErrorExists(true);
      setErrorMessage("Error. User doesn't exist.");
    }
    setQueryLoading(false);
  };

  return (
    <View style={device.safeArea}>
      <View style={styles.screenContainer}>
        <View style={styles.textContainer}>
          <Text style={fonts.instructionHeading}>Delete account?</Text>
          <Text style={fonts.greyBody}>
            Deleting your account will also permanently delete any data
            associated with it. This action cannot be undone.
          </Text>
        </View>

        <View style={instruction.buttonsContainer}>
          <View style={input.errorMessageContainer}>
            <Text style={fonts.errorMessage}>
              {errorExists ? errorMessage : ''}
            </Text>
          </View>

          <View style={input.inlineInputContainer}>
            <ButtonWhite
              onPress={() => router.back()}
              $halfWidth
              $centeredContent
            >
              <View style={input.groupButtonContent}>
                <X />
                <Text style={fonts.blackButton}>Cancel</Text>
              </View>
            </ButtonWhite>

            <ButtonBlack
              onPress={deleteAccount}
              disabled={queryLoading}
              $halfWidth
              $centeredContent
            >
              <View style={input.groupButtonContent}>
                {queryLoading ? <ActivityIndicator /> : <WhiteTrash />}
                <Text style={fonts.whiteButton}>Confirm</Text>
              </View>
            </ButtonBlack>
          </View>
        </View>
      </View>
    </View>
  );
}
