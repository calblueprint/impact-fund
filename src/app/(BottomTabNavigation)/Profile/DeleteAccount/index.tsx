import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import WhiteTrash from '../../../../../assets/white-trash.svg';
import X from '../../../../../assets/x.svg';
import {
  ButtonBlack,
  ButtonTextBlack,
  ButtonTextWhite,
  ButtonWhite,
} from '../../../../Components/AuthButton/AuthButton';
import CasesHeader from '../../../../Components/CasesHeader/CasesHeader';
import { useSession } from '../../../../context/AuthContext';
import { SafeArea } from '../../../../styles/global';

function DeleteAccountScreen() {
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
        <View>
          <CasesHeader />

          <View style={styles.textContainer}>
            <Text style={styles.topText}>Delete account?</Text>
            <Text style={styles.blurb}>
              Deleting your account will also permanently delete any data
              associated with it. This action cannot be undone.
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonWhite onPress={() => router.back()} style={styles.buttonView}>
            <View style={styles.buttonContent}>
              <X />
              <ButtonTextBlack style={styles.cancelText}>
                Cancel
              </ButtonTextBlack>
            </View>
          </ButtonWhite>

          <ButtonBlack onPress={deleteAccount} style={styles.buttonView}>
            <View style={styles.buttonContent}>
              <WhiteTrash />
              <ButtonTextWhite>Confirm</ButtonTextWhite>
            </View>
          </ButtonBlack>
        </View>
      </View>
    </SafeArea>
  );
}
export default DeleteAccountScreen;
