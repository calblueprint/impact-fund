import { router } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import CheckEligibility from '../../../assets/check-eligibility.svg';
import Fileclaim from '../../../assets/file-claim.svg';
import Arrow from '../../../assets/next.svg';
import OptOut from '../../../assets/opt-out.svg';
import { Case, Eligibility } from '../../types/types';

interface EligibilityCardProps {
  caseData: Case;
  status: Eligibility;
}

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
          style={styles.buttonContainer}
          onPress={() => {
            router.push({
              pathname: '/AllCases/EligibilityForm',
              params: { caseId: caseData.id },
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
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.leftContainer}>
            <Fileclaim />
          </View>
          <View style={styles.middleContainer}>
            <Text style={styles.headerText}>File a case claim</Text>
            <Text style={styles.bodyText}>
              Eligible class members can submit a claim electronically to
              receive a settlement.
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <Arrow />
          </View>
        </TouchableOpacity>

        <View style={styles.separatorComponent}>
          <View style={styles.horizontalLine} />
          <View style={styles.textContainer}>
            <Text style={styles.separatorText}>OR</Text>
          </View>
          <View style={styles.horizontalLine} />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.leftContainer}>
            <OptOut />
          </View>
          <View style={styles.middleContainer}>
            <Text style={styles.headerText}>Opt out of case</Text>
            <Text style={styles.bodyText}>
              Opt out of this case to do something you can still file private
              claim yada yada
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <Arrow />
          </View>
        </TouchableOpacity>
      </View>
    );
  } else {
    return <View />;
  }
}
