import { router, useLocalSearchParams } from 'expo-router';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import CircleCheckWhite from '../../../../../../assets/circle-check-white.svg';
// import Warning from '../../../../../../assets/open-warning.svg';
import X from '../../../../../../assets/x.svg';
import CasesHeader from '../../../../../Components/CasesHeader/CasesHeader';
import { useSession } from '../../../../../context/AuthContext';
import { CaseContext } from '../../../../../context/CaseContext';
import { CaseUid } from '../../../../../types/types';

function ConfirmOptOut() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const { leaveCase } = useContext(CaseContext);

  const { signOut, deleteCurrentUser, session } = useSession();

  // const deleteAccount = () => {
  //   if (session?.user.id) {
  //     deleteCurrentUser(session.user.id);
  //   }
  //   signOut();
  // };

  async function deleteCase() {
    if (caseUid !== undefined) {
      await leaveCase(caseUid);
      router.push({
        pathname: '/AllCases',
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <CasesHeader />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.topText}>Indicate that you've opted out?</Text>
          <Text style={styles.blurb}>
            Deleting your account will also permanently delete any data
            assoicated with it. This action cannot be undone.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.cancelButton}
            >
              <View style={styles.buttonContent}>
                <X />
                <Text style={styles.cancelText}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity onPress={deleteCase} style={styles.confirmButton}>
              <View style={styles.buttonContent}>
                <CircleCheckWhite />
                <Text style={styles.confirmText}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
export default ConfirmOptOut;
