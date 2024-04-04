import * as Linking from 'expo-linking';
import { useLocalSearchParams, useNavigation } from 'expo-router';
//import * as Sharing from 'expo-sharing';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Share } from 'react-native';

import styles from './styles';
import Icon from '../../../../../assets/shareicon.svg';
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigation = useNavigation();

  const getCase = async (uid: string) => {
    const caseData = await getCaseById(uid);
    setCaseData(caseData);
    setIsLoading(false);
  };

  const onShare = async () => {
    const addCaseUrl = Linking.createURL('?event=addCase&', {
      queryParams: { caseUid },
    });
    console.log(addCaseUrl);
    try {
      await Share.share({
        //message: 'ADD CASE',
        url: `${addCaseUrl}/`,
      });
    } catch (error) {
      console.log(error);
    }
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
          <TouchableOpacity style={styles.shareContainer} onPress={onShare}>
            <Text style={styles.share}>Share</Text>
            <Icon style={{ marginTop: 2 }} />
          </TouchableOpacity>
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
