import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import CaseStatusBar from '../../../../Components/CaseStatusBar/CaseStatusBar';
import CaseSummaryCard from '../../../../Components/CaseSummaryCard/CaseSummarCard';
import EducationalBar from '../../../../Components/EducationalBar/EducationalBar';
import EligibilityCard from '../../../../Components/EligibilityCard/EligibilityCard';
import FormsCard from '../../../../Components/FormsCard/FormsCard';
import { Case, Eligibility } from '../../../../types/types';
import { getCaseStatus } from '../../../../supabase/queries/cases';

function CasesScreen() {
  const caseData = useLocalSearchParams() as unknown as Case;
  const [status, setStatus] = useState(Eligibility.ELIGIBLE);

  useEffect(() => {
    const getStatus = async () => {
      const caseStatus = await getCaseStatus(caseData.id);
      setStatus(caseStatus);
      console.log(caseStatus);
    };
    getStatus();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
      {status === Eligibility.ELIGIBLE && (
        <EligibilityCard caseData={caseData} status={status} />
      )}
      <CaseStatusBar />
      <CaseSummaryCard />
      {(status === Eligibility.INELIGIBLE ||
        status === Eligibility.UNDETERMINED) && (
        <EligibilityCard caseData={caseData} status={status} />
      )}
      <FormsCard />
      <EducationalBar />
    </View>
  );
}

export default CasesScreen;
