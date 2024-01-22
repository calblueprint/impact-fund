import { Link, router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import RightArrow from '../../../../../assets/right-arrow.svg';
import {
  getCaseById,
  updateCaseStatus,
} from '../../../../supabase/queries/cases';
import { CaseUid, Eligibility } from '../../../../types/types';

export default function EligibilityForm() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();

  const updateEligibility = async (status: Eligibility) => {
    if (caseUid !== undefined) {
      await updateCaseStatus(caseUid, status);
      router.replace({
        pathname: `/AllCases/CaseScreen/${caseUid}`,
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.insideContainer}>
          <Text>The eligibility requirements are as follows:</Text>
          <View>
            <Text>Requirement 1</Text>
            <Text>Requirement 2</Text>
            <Text>Requirement 3</Text>
          </View>
          <Text>Do you meet the following requirements?</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapperTop}>
          <Link href={`/AllCases/CaseScreen/${caseUid}`} asChild replace>
            <TouchableOpacity
              style={[styles.button, styles.buttonTop]}
              onPress={() => updateEligibility(Eligibility.ELIGIBLE)}
            >
              <Text>Yes, I am Eligible</Text>
              <RightArrow />
            </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.buttonWrapperBottom}>
          <TouchableOpacity
            style={[styles.button, styles.buttonBottom]}
            onPress={() => updateEligibility(Eligibility.INELIGIBLE)}
          >
            <Text style={styles.buttonBottomText}>No, I'm not Eligible</Text>
            <Text style={styles.buttonBottomText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
