import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import {
  updateCaseStatus,
  getCaseById,
} from '../../../../supabase/queries/cases';
import { Case, CaseUid } from '../../../../types/types';
import { openUrl } from '../utils';

const ensureURLFormat = (url: string | null | undefined) => {
  if (!url) return null;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `https://${url}`;
};

export default function OptOutScreen() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const [caseData, setCaseData] = useState<Case>();

  async function fetchCaseData() {
    if (caseUid) {
      const caseData = await getCaseById(caseUid);
      setCaseData(caseData);
    }
  }

  useEffect(() => {
    fetchCaseData();
  }, []);

  const optOutLink = caseData?.optOutLink
    ? ensureURLFormat(caseData.optOutLink)
    : null;
  const onPressHandler = optOutLink ? () => openUrl(optOutLink) : undefined;

  return (
    <View style={styles.container}>
      {caseData === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text style={styles.titleText}>Opt Out of Case</Text>
          <TouchableOpacity style={styles.button} onPress={onPressHandler}>
            <Text style={styles.bodyText}>Take Me to Link to Opt Out</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              router.push({
                pathname: `/AllCases/OptOut/ConfirmOptOut/${caseUid}`,
              })
            }
          >
            <Text style={styles.bodyText}>I've Already Opted Out</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
