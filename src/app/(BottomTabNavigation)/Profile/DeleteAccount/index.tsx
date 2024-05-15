import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import WhiteTrash from '../../../../../assets/white-trash.svg';
import X from '../../../../../assets/x.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../../Components/AuthButton/AuthButton';
import { useSession } from '../../../../context/AuthContext';
import { fonts } from '../../../../styles/fonts';
import { SafeArea } from '../../../../styles/global';
import { input } from '../../../../styles/input';

export default function DeleteAccountScreen() {
  const { signOut, deleteCurrentUser, session } = useSession();

  const deleteAccount = () => {
    if (session?.user.id) {
      deleteCurrentUser(session.user.id);
    }
    signOut();
  };

  return (
    <SafeArea>
      <View style={styles.screenContainer}>
        <View style={styles.textContainer}>
          <Text style={fonts.tabHeading}>Delete account?</Text>
          <Text style={fonts.greyBody}>
            Deleting your account will also permanently delete any data
            associated with it. This action cannot be undone.
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

          <ButtonBlack onPress={deleteAccount} $halfWidth $centeredContent>
            <View style={input.groupButtonContent}>
              <WhiteTrash />
              <Text style={fonts.whiteButton}>Confirm</Text>
            </View>
          </ButtonBlack>
        </View>
      </View>
    </SafeArea>
  );
}
