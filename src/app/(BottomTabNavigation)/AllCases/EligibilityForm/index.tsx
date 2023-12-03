import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import RightArrow from '../../../../../assets/right-arrow.svg';
import {
  getCaseById,
  updateCaseStatus,
} from '../../../../supabase/queries/cases';
import { Case, CaseUid, Eligibility } from '../../../../types/types';

export default function EligibilityForm() {
  const caseId = useLocalSearchParams() as unknown as CaseUid;
  console.log(caseId);

  const updateEligibility = async (status: Eligibility) => {
    await updateCaseStatus(caseId, status);
    getCaseById(caseId).then(res => {
      router.push({ pathname: '/AllCases/CaseScreen', params: { ...res } });
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image
          style={styles.image}
          source={{
            uri: 'http://helloworld.com',
          }}
        />
      </View>
    </View>
  );
}
/* <View style={styles.textContainer}>
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
          <TouchableOpacity
            style={[styles.button, styles.buttonTop]}
            onPress={() => updateEligibility(Eligibility.ELIGIBLE)}
          >
            <Text>Yes, I am Eligible</Text>
            <RightArrow />
          </TouchableOpacity>
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
      )*/
