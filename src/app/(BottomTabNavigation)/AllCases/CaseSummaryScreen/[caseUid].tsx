import { useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from './styles';
import ExternalSiteLink from '../../../../Components/ExternalSiteLink/ExternalSiteLink';
import { getCaseById } from '../../../../supabase/queries/cases';
import { Case } from '../../../../types/types';
import { formatDate } from '../utils';

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
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Image
            style={styles.imageContainer}
            source={{
              uri: caseData.imageUrl,
            }}
          />
          <View style={styles.blurbContainer}>
            <Text style={styles.blurbText}>{caseData.blurb}</Text>
            <View style={styles.inLineSubInfo}>
              <Text style={styles.subText}>
                {formatDate(caseData.date)} • {caseData.lawFirm}
              </Text>
            </View>
          </View>
          <Text style={styles.summaryText}>{caseData.summary}</Text>
          <ExternalSiteLink
            text="Learn more on case website"
            url={caseData.caseSite}
          />
        </ScrollView>
      )}
    </View>
  );
}
