import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import Mail from '../../../../../assets/big-envelope.svg';
import BlackRightArrow from '../../../../../assets/black-right-arrow.svg';
import Reset from '../../../../../assets/reset-password-refresh.svg';
import RightWhiteArrow from '../../../../../assets/right-arrow-white.svg';
import { getCaseById } from '../../../../supabase/queries/cases';
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
        <View style={styles.screenContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>Opting out of a case</Text>
            <View style={styles.infoContainer}>
              <View style={styles.textIconContainer}>
                <Mail style={styles.icon} />
                <View style={styles.textContainer}>
                  <Text style={styles.infoText}>
                    You must first Opt-Out on the official case website linked
                    below.{' '}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.textIconContainer}>
                <Reset style={styles.icon} />
                <View style={styles.textContainer}>
                  <Text style={styles.infoText}>
                    Once you opt-out online, please confirm that you've opted
                    out on the following screen.{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.buttonBase, styles.buttonWhite]}
              onPress={onPressHandler}
            >
              <Text style={[styles.buttonText, styles.blackText]}>
                Take Me to Link to Opt Out
              </Text>
              <BlackRightArrow />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonBase, styles.buttonBlack]}
              onPress={() =>
                router.push(`/AllCases/OptOut/ConfirmOptOut/${caseUid}`)
              }
            >
              <Text style={[styles.buttonText, styles.whiteText]}>
                I've Already Opted Out
              </Text>
              <RightWhiteArrow />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
