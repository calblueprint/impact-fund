import { Link, router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import Ex from '../../../../../../assets/cancel-x-icon.svg';
import Check from '../../../../../../assets/check-circle.svg';
import Line from '../../../../../../assets/line-vector.svg';
import Alarm from '../../../../../../assets/noIdea.svg';
import LittlePerson from '../../../../../../assets/noIdea2.svg';
import {
  updateCaseActivity,
  updateCaseStatus,
} from '../../../../../supabase/queries/cases';
import { CaseUid, Eligibility } from '../../../../../types/types';

export default function ConfirmEligibility() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();

  const updateActivity = async (active: boolean) => {
    console.log('case', caseUid);
    console.log('active', active);
    if (caseUid !== undefined) {
      if (!active) {
        await updateCaseStatus(caseUid, Eligibility.INELIGIBLE);
        await updateCaseActivity(caseUid, active);
        router.push({
          pathname: '/AllCases',
        });
      } else {
        router.back();
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.titleText}>
          Do you want to mark your status as ineligible?
        </Text>
        <View style={styles.infoContainer}>
          <Alarm style={{ marginRight: 17, marginTop: 5 }} />

          <Text style={styles.infoText}>
            Once you indicate ineligibility, this case will become inactive.{' '}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <LittlePerson style={{ marginRight: 17, marginTop: 12 }} />

          <Text style={styles.infoText}>
            You can still view and share case details, but won’t be able to
            change your eligibility status or file a claim.{' '}
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Line style={{ marginBottom: 15 }} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => updateActivity(true)}
        >
          <View style={styles.center}>
            <Ex style={{ marginRight: 10 }} />
            <Text style={styles.buttonTextBlack}>No, I don't</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBlack}
          onPress={() => updateActivity(false)}
        >
          <View style={styles.center}>
            <Check style={{ marginRight: 10 }} />
            <Text style={styles.buttonText}>Yes, I do</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
