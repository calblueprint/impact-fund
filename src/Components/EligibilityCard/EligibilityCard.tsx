import { router } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import CheckEligibility from '../../../assets/check-eligibility.svg';
import Fileclaim from '../../../assets/file-claim.svg';
import Arrow from '../../../assets/next.svg';
import OptOut from '../../../assets/opt-out.svg';
import { openUrl } from '../../app/(BottomTabNavigation)/AllCases/utils';
import globalStyles from '../../styles/global';
import { Case, Eligibility } from '../../types/types';

interface EligibilityCardProps {
  caseData: Case;
  status: Eligibility;
}

const ensureURLFormat = (url: string | null | undefined) => {
  if (!url) return null;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `https://${url}`;
};

export default function EligibilityCard({
  caseData,
  status,
}: EligibilityCardProps) {
  if (
    status === Eligibility.INELIGIBLE ||
    status === Eligibility.UNDETERMINED
  ) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.buttonContainer, globalStyles.shadowBorder]}
          onPress={() => {
            router.push({
              pathname: `/AllCases/EligibilityForm/${caseData.id}`,
            });
          }}
        >
          <View style={styles.leftContainer}>
            <CheckEligibility />
          </View>
          <View style={styles.middleContainer}>
            <Text style={styles.headerText}>Check eligibility</Text>
            <Text style={styles.bodyText}>
              Check your eligibility for this case if you would like to file a
              claim or opt out.
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <Arrow />
          </View>
        </TouchableOpacity>
      </View>
    );
  } else if (status === Eligibility.ELIGIBLE) {
    const claimLink = caseData.claimLink
      ? ensureURLFormat(caseData.claimLink)
      : null;
    const onPressHandler = claimLink ? () => openUrl(claimLink) : undefined;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.buttonContainer, globalStyles.shadowBorder]}
          onPress={() => {
            router.push({
              pathname: `/AllCases/FileClaim/${caseData.id}`,
            });
          }}
        >
          <View style={styles.topContainer}>
            <View style={styles.leftContainer}>
              <Fileclaim />
            </View>
            <View style={styles.middleContainer}>
              <Text style={styles.bodyText}>
                Eligible class members can submit a claim electronically to
                receive a settlement.
              </Text>
            </View>
          </View>

          <View style={styles.horizontalLine} />

          <View style={styles.bottomContainer}>
            <Text style={styles.smallText}>File or update my claim</Text>
            <Arrow />
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={[styles.buttonContainer, globalStyles.shadowBorder]}
          onPress={() => {
            router.push({
              pathname: `/AllCases/OptOut/${caseData.id}`,
            });
          }}
        >
          <View style={styles.topContainer}>
            <View style={styles.leftContainer}>
              <OptOut />
            </View>
            <View style={styles.middleContainer}>
              <Text style={styles.bodyText}>
                Opt out to remove yourself from this class action and deactivate
                this case.
              </Text>
            </View>
          </View>

          <View style={styles.horizontalLine} />

          <View style={styles.bottomContainer}>
            <Text style={styles.smallText}>View options for opting out</Text>
            <Arrow />
          </View>
        </TouchableOpacity> */}
      </View>
    );
  } else {
    return <View />;
  }
}
