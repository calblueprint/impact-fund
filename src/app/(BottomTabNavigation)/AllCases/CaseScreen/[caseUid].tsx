import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './styles';
import CaseSummaryCard from '../../../../components/CaseSummaryCard/CaseSummaryCard';
import CheckEligibilityButton from '../../../../components/CheckEligibilityButton/CheckEligibilityButton';
import ClaimStatusBar from '../../../../components/ClaimStatusBar/ClaimStatusBar';
import EducationalBar from '../../../../components/EducationalBar/EducationalBar';
import EligibilityCard from '../../../../components/EligibilityCard/EligibilityCard';
import FormsCard from '../../../../components/FormsCard/FormsCard';
import StatusUpdatesBar from '../../../../components/StatusUpdatesBar/StatusUpdatesBar';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { getCaseStatus, getCaseById } from '../../../../supabase/queries/cases';
import { Case, Eligibility } from '../../../../types/types';

function CaseScreen() {
  const { caseUid } = useLocalSearchParams<{ caseUid: string }>();
  const [status, setStatus] = useState<Eligibility>();
  const [caseData, setCaseData] = useState<Case>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigation = useNavigation();

  const getCase = async (uid: string) => {
    const caseData = await getCaseById(uid);
    setCaseData(caseData);
    setIsLoading(false);
  };

  const getStatus = async (uid: string) => {
    const caseStatus = await getCaseStatus(uid);
    setStatus(caseStatus);
  };

  useEffect(() => {
    if (caseUid !== undefined) {
      getCase(caseUid);
    }
  }, []);

  useEffect(() => {
    navigation.addListener('focus', async () => {
      setIsLoading(true);
      if (caseUid !== undefined) {
        await getStatus(caseUid);
      }
      setIsLoading(false);
    });
  }, [navigation]);

  return (
    <View style={device.safeArea}>
      {isLoading || caseData === undefined ? (
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
