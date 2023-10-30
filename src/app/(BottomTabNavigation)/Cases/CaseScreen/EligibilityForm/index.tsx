import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useLocalSearchParams, useRouter } from 'expo-router';
import styles from './styles';
import { updateCaseStatus } from '../../../../../supabase/queries/cases';
import { CaseUid, Eligibility } from '../../../../../types/types';

export default function EligibilityForm() {
  const router = useRouter();
  const { caseId } = useLocalSearchParams<{
    caseId: CaseUid;
  }>();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.insideContainer}>
          <View>
            <Text>The eligibility requirements are as follows:</Text>
          </View>
          <View>
            <Text>Sexy</Text>
            <Text>Tall</Text>
            <Text>Handsome</Text>
          </View>
          <View>
            <Text>Do you meet the following requirements?</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapperTop}>
          <TouchableOpacity
            style={[styles.button, styles.buttonTop]}
            onPress={() => {
              // Not sure why this is happening
              updateCaseStatus(caseId, Eligibility.ELIGIBLE);
            }}
          >
            <Text>Yes, I am Eligible</Text>
            <Text>{'->'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapperBottom}>
          <TouchableOpacity
            style={[styles.button, styles.buttonBottom]}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonBottomText}>No, I'm not Eligible</Text>
            <Text style={styles.buttonBottomText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
