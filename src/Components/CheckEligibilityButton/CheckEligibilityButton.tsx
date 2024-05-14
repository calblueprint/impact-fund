import { router } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import CheckEligibility from '../../../assets/check-eligibility.svg';
import Arrow from '../../../assets/next.svg';
import { fonts } from '../../styles/fonts';
import { shawdowStyles } from '../../styles/global';
import { CaseUid } from '../../types/types';

interface CheckEligibilityProps {
  caseUid: CaseUid;
}

export default function CheckEligibilityButton({
  caseUid,
}: CheckEligibilityProps) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, shawdowStyles.shadowBorder]}
      onPress={() => {
        router.push(`/AllCases/EligibilityForm/${caseUid}`);
      }}
    >
      <CheckEligibility />
      <View style={styles.rightContainer}>
        <View style={styles.topRow}>
          <Text style={fonts.condensedHeadline}>Check eligibility</Text>
          <Arrow />
        </View>
        <Text style={fonts.greySmall}>
          Check your eligibility for this case if you would like to file a claim
          or opt out.
        </Text>
      </View>
    </TouchableOpacity>
  );
}
