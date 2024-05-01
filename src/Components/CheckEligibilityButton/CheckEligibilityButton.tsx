import { router } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import CheckEligibility from '../../../assets/check-eligibility.svg';
import Arrow from '../../../assets/next.svg';
import globalStyles from '../../styles/global';
import { CaseUid } from '../../types/types';

interface CheckEligibilityProps {
  caseUid: CaseUid;
}

export default function CheckEligibilityButton({
  caseUid,
}: CheckEligibilityProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonContainer, globalStyles.shadowBorder]}
        onPress={() => {
          router.push({
            pathname: `/AllCases/EligibilityForm/${caseUid}`,
          });
        }}
      >
        <View style={styles.leftContainer}>
          <CheckEligibility />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.headerText}>Check eligibility</Text>
          <Text style={styles.bodyText}>
            Check your eligibility for this case if you would like to file a
            claim or opt out.
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Arrow />
        </View>
      </TouchableOpacity>
    </View>
  );
}
