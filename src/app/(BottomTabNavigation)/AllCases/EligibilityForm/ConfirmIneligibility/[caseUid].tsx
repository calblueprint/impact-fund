import { router, useLocalSearchParams } from 'expo-router';
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import Ex from '../../../../../../assets/cancel-x-icon.svg';
import Check from '../../../../../../assets/check-circle.svg';
import Alarm from '../../../../../../assets/noIdea.svg';
import LittlePerson from '../../../../../../assets/noIdea2.svg';
import { CaseContext } from '../../../../../context/CaseContext';
import { CaseUid } from '../../../../../types/types';

export default function ConfirmEligibility() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const { leaveCase } = useContext(CaseContext);

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
      <View style={styles.centerContainer}>
        <Text style={styles.titleText}>
          Do you want to mark your status as ineligible?
        </Text>
        <View style={styles.infoContainer}>
          <Alarm style={{ marginTop: 5 }} />

          <Text style={styles.infoText}>
            Once you indicate ineligibility, this case will become inactive.{' '}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <LittlePerson style={{ marginTop: 5 }} />

          <Text style={styles.infoText}>
            You can still view and share case details, but won’t be able to
            change your eligibility status or file a claim.{' '}
          </Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.buttonBase, styles.ineligbleButton]}
            onPress={() => router.back()}
          >
            <Ex />
            <Text style={styles.buttonText}>No, I don't</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonBase, styles.eligibleButton]}
            onPress={() => deleteCase()}
          >
            <Check />
            <Text style={[styles.buttonText, styles.eligibleButtonText]}>
              Yes, I do
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
