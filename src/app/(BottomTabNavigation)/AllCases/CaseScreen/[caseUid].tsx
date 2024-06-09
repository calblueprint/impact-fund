import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './styles';
import CaseSummaryCard from '../../../../Components/CaseSummaryCard/CaseSummaryCard';
import CheckEligibilityButton from '../../../../Components/CheckEligibilityButton/CheckEligibilityButton';
import ClaimStatusBar from '../../../../Components/ClaimStatusBar/ClaimStatusBar';
import EducationalBar from '../../../../Components/EducationalBar/EducationalBar';
import EligibilityCard from '../../../../Components/EligibilityCard/EligibilityCard';
import FormsCard from '../../../../Components/FormsCard/FormsCard';
import StatusUpdatesBar from '../../../../Components/StatusUpdatesBar/StatusUpdatesBar';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { getCaseStatus, getCaseById } from '../../../../supabase/queries/cases';
import { Case, Eligibility } from '../../../../types/types';

function CaseScreen() {
  const { caseUid } = useLocalSearchParams<{ caseUid: string }>();
  const [status, setStatus] = useState<Eligibility>();
  const [caseData, setCaseData] = useState<Case>();

  const getCase = async (caseUid: string) => {
    const caseData = await getCaseById(caseUid);
    setCaseData(caseData);
  };

  const getStatus = async (caseUid: string) => {
    const caseStatus = await getCaseStatus(caseUid);
    setStatus(caseStatus);
  };

  useEffect(() => {
    if (caseUid !== undefined) {
      getCase(caseUid);
      getStatus(caseUid);
    }
  }, []);

  return (
    <View style={device.safeArea}>
      {!caseData || !status ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView
          style={styles.outerScroll}
          contentContainerStyle={styles.innerScroll}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleContainer}>
            <Text style={[fonts.tabHeading, styles.title]}>
              {caseData.title}
            </Text>
          </View>

          {status === Eligibility.ELIGIBLE && (
            <EligibilityCard caseUid={caseData.id} />
          )}

          {status === Eligibility.CLAIM_FILED && (
            <ClaimStatusBar status="Claim Filed" />
          )}

          <CaseSummaryCard {...caseData} />

          {(status === Eligibility.INELIGIBLE ||
            status === Eligibility.UNDETERMINED) && (
            <CheckEligibilityButton caseUid={caseData.id} />
          )}
          <StatusUpdatesBar
            caseUid={caseData.id}
            status={caseData.caseStatus}
          />
          <FormsCard {...caseData} />
          <EducationalBar />
        </ScrollView>
      )}
    </View>
  );
}

export default CaseScreen;
