import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './styles';
// eslint-disable-next-line import/namespace
import CaseSummaryCard from '../../../../Components/CaseSummaryCard/CaseSummaryCard';
import CheckEligibilityButton from '../../../../Components/CheckEligibilityButton/CheckEligibilityButton';
import EducationalBar from '../../../../Components/EducationalBar/EducationalBar';
import EligibilityCard from '../../../../Components/EligibilityCard/EligibilityCard';
import FormsCard from '../../../../Components/FormsCard/FormsCard';
import StatusUpdatesBar from '../../../../Components/StatusUpdatesBar/StatusUpdatesBar';
import ToggleOptionsButton from '../../../../Components/ToggleOptionsButton/ToggleOptionsButton';
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
      if (caseUid !== undefined) {
        getStatus(caseUid);
      }
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {isLoading || caseData === undefined ? (
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

          {status === Eligibility.ELIGIBLE && (
            <>
              <EligibilityCard caseUid={caseData.id} />
            </>
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
