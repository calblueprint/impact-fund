import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import BlackRightArrow from '../../../../../assets/black-right-arrow.svg';
import Document from '../../../../../assets/document-add.svg';
import Checkbox from '../../../../../assets/double-checkbox.svg';
import Fileclaim from '../../../../../assets/file-claim-small.svg';
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

export default function FileClaimScreen() {
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

  const claimLink = caseData?.claimLink
    ? ensureURLFormat(caseData.claimLink)
    : null;
  const onPressHandler = claimLink ? () => openUrl(claimLink) : undefined;

  return (
    <View style={styles.container}>
      {caseData === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.screenContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>Filing a claim</Text>
            <View style={styles.infoContainer}>
              <View style={styles.textIconContainer}>
                <Fileclaim style={styles.icon} />
                <View style={styles.textContainer}>
                  <Text style={styles.infoText}>
                    Filing a claim commits you to the class action and any
                    potential compensation awarded
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.textIconContainer}>
                <Document style={styles.icon} />
                <View style={styles.textContainer}>
                  <Text style={styles.infoText}>
                    Complete the required claim form on the official claim
                    filing site to submit your claim
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.textIconContainer}>
                <Checkbox style={styles.icon} />
                <View style={styles.textContainer}>
                  <Text style={styles.infoText}>
                    Come back to this screen to update your claim filing status
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
                Take me to claim filing site
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
                I’ve already filed a claim!
              </Text>
              <RightWhiteArrow />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
