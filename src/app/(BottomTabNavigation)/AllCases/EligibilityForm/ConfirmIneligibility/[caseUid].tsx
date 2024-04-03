import { router, useLocalSearchParams } from 'expo-router';
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import Ex from '../../../../../../assets/cancel-x-icon.svg';
import Check from '../../../../../../assets/check-circle.svg';
import Line from '../../../../../../assets/line-vector.svg';
import Alarm from '../../../../../../assets/noIdea.svg';
import LittlePerson from '../../../../../../assets/noIdea2.svg';
import { CaseContext } from '../../../../../context/CaseContext';
import { CaseUid } from '../../../../../types/types';

export default function ConfirmEligibility() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const { removeCase } = useContext(CaseContext);

  async function deleteCase() {
    if (caseUid !== undefined) {
      removeCase(caseUid);
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

      <Line style={{ marginBottom: 15 }} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Ex style={{ marginRight: 10, marginLeft: 6 }} />
          <Text style={styles.buttonTextBlack}>No, I don't</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBlack}
          onPress={() => deleteCase()}
        >
          <Check style={{ marginRight: 10, marginLeft: 8 }} />
          <Text style={styles.buttonText}>Yes, I do</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
