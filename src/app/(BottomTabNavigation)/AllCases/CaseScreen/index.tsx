import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './styles';
// eslint-disable-next-line import/namespace
import CaseStatusBar from '../../../../Components/CaseStatusBar/CaseStatusBar';
import CaseSummaryCard from '../../../../Components/CaseSummaryCard/CaseSummaryCard';
import EducationalBar from '../../../../Components/EducationalBar/EducationalBar';
import EligibilityCard from '../../../../Components/EligibilityCard/EligibilityCard';
import FormsCard from '../../../../Components/FormsCard/FormsCard';
import { getCaseStatus } from '../../../../supabase/queries/cases';
import { Case, Eligibility } from '../../../../types/types';

function CaseScreen() {
  const caseData = useLocalSearchParams() as unknown as Case;
  const [status, setStatus] = useState<Eligibility>();

  useEffect(() => {
    const getStatus = async () => {
      const caseStatus = await getCaseStatus(caseData.id);
      setStatus(caseStatus);
    };
    getStatus();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          alignItems: 'center',
          minHeight: 900,
          rowGap: 15,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{caseData.title}</Text>
        </View>
        <CaseStatusBar status={caseData.caseStatus} />
        {status === Eligibility.ELIGIBLE && (
          <EligibilityCard caseData={caseData} status={status} />
        )}
        <CaseSummaryCard {...caseData} />
        {(status === Eligibility.INELIGIBLE ||
          status === Eligibility.UNDETERMINED) && (
          <EligibilityCard caseData={caseData} status={status} />
        )}
        <FormsCard {...caseData} />
        <EducationalBar />
      </ScrollView>
    </View>
  );
}

export default CaseScreen;
