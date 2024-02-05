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
import { getCaseStatus, getCaseById } from '../../../../supabase/queries/cases';
import { Case, Eligibility } from '../../../../types/types';

function CaseScreen() {
  const { caseUid } = useLocalSearchParams<{ caseUid: string }>();
  const [status, setStatus] = useState<Eligibility>();
  const [caseData, setCaseData] = useState<Case>();

  const getCase = async (uid: string) => {
    const caseData = await getCaseById(uid);
    setCaseData(caseData);
  };

  const getStatus = async (uid: string) => {
    const caseStatus = await getCaseStatus(uid);
    setStatus(caseStatus);
  };

  useEffect(() => {
    if (caseUid !== undefined) {
      getCase(caseUid);
      getStatus(caseUid);
    }
  }, []);

  return (
    <View style={styles.container}>
      {caseData === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView
          style={styles.outerScroll}
          contentContainerStyle={styles.innerScroll}
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
      )}
    </View>
  );
}

export default CaseScreen;
