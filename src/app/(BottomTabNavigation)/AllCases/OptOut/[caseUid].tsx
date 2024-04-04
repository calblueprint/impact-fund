import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import Check from '../../../../../assets/check-circle.svg';
import Error from '../../../../../assets/exclamation.svg';
import Ex from '../../../../../assets/x.svg';
import PressableRequirement from '../../../../Components/PressableRequirement/PressableRequirement';
import {
  updateCaseStatus,
  getCaseById,
} from '../../../../supabase/queries/cases';
import { getRequirementsByCaseUid } from '../../../../supabase/queries/eligibility';
import {
  Case,
  CaseUid,
  Eligibility,
  EligibilityRequirement,
} from '../../../../types/types';

export default function OptOutScreen() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const [caseData, setCaseData] = useState<Case>();
  const [eligibilityRequirements, setEligibilityRequirements] = useState<
    EligibilityRequirement[]
  >([]);
  const [checkCount, setCheckCount] = useState(0);

  async function fetchCaseData() {
    if (caseUid) {
      const caseData = await getCaseById(caseUid);
      setCaseData(caseData);
    }
  }

  async function updateEligibility(status: Eligibility) {
    if (caseUid !== undefined) {
      await updateCaseStatus(caseUid, status);
      router.back();
    }
  }

  useEffect(() => {
    fetchCaseData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Opt Out of Case</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.bodyText}>Take Me to Link to Opt Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.bodyText}>I've Already Opted Out</Text>
      </TouchableOpacity>
    </View>
  );
}
