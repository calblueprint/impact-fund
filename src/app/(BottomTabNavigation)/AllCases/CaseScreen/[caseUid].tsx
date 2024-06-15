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
import ScreenLoadingComponent from '../../../../Components/ScreenLoadingComponent/ScreenLoadingComponent';
import StatusUpdatesBar from '../../../../Components/StatusUpdatesBar/StatusUpdatesBar';
import { useCaseContext } from '../../../../context/CaseContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { getCaseById } from '../../../../supabase/queries/cases';
import { Case, ClaimStatus } from '../../../../types/types';

function CaseScreen() {
  const { caseUid } = useLocalSearchParams<{ caseUid: string }>();
  const [status, setStatus] = useState<ClaimStatus>();
  const [caseData, setCaseData] = useState<Case>();

  const { getClaimStatus } = useCaseContext();

  const getCase = async (caseUid: string) => {
    const caseData = await getCaseById(caseUid);
    setCaseData(caseData);
  };

  const getStatus = async (caseUid: string) => {
    const caseStatus = await getClaimStatus(caseUid);
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
        <ScreenLoadingComponent />
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

          {status === ClaimStatus.ELIGIBLE && (
            <EligibilityCard caseUid={caseData.id} />
          )}

          {status === ClaimStatus.CLAIM_FILED && (
            <ClaimStatusBar status="Claim Filed" />
          )}

          <CaseSummaryCard {...caseData} />

          {(status === ClaimStatus.INELIGIBLE ||
            status === ClaimStatus.UNDETERMINED) && (
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
