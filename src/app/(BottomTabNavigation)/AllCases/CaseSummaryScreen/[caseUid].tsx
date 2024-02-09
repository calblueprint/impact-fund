import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';
import CaseSummaryContent from '../../../../Components/CaseSummaryContent/CaseSummaryContent';
import ExternalSiteLink from '../../../../Components/ExternalSiteLink/ExternalSiteLink';
import { getCaseById } from '../../../../supabase/queries/cases';
import { Case } from '../../../../types/types';
// import { formatDate } from '../utils';

export default function CaseSummaryScreen() {
  const { caseUid } = useLocalSearchParams<{ caseUid: string }>();
  const [caseData, setCaseData] = useState<Case>();

  const getCase = async (uid: string) => {
    const caseData = await getCaseById(uid);
    setCaseData(caseData);
  };

  useEffect(() => {
    if (caseUid !== undefined) {
      getCase(caseUid);
    }
  }, []);

  return (
    <View style={styles.container}>
      {caseData === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <CaseSummaryContent />
          <View style={styles.linkContainer}>
            <ExternalSiteLink
              text="Learn more on case website"
              url={caseData.caseSite}
            />
          </View>
        </>
      )}
    </View>
  );
}
