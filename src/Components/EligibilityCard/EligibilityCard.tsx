import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { Case, Eligibility } from '../../types/types';
import { useRouter } from 'expo-router';
import Arrow from '../../../assets/arrow.svg';
import Check from '../../../assets/check.svg';
import Fileclaim from '../../../assets/file-claim.svg';
import Optout from '../../../assets/opt-out.svg';

interface EligibilityCardProps {
  caseData: Case;
  status: Eligibility;
}

export default function EligibilityCard({
  caseData,
  status,
}: EligibilityCardProps) {
  const router = useRouter();
  if (status === Eligibility.ELIGIBLE || status === Eligibility.UNDETERMINED) {
    return (
      <View style={[styles.container, styles.eligible]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.push({
              pathname: '/Cases/CaseScreen/EligibilityForm',
              params: { caseId: caseData.id },
            });
          }}
        >
          <View style={styles.topText}>
            <Check />
            <View style={styles.center}>
              <Text style={styles.text}>Check Eligibility</Text>
            </View>
            <Arrow />
          </View>

          <Text>
            Check your eligibility for this class action if you would like to
            file a claim or opt out.
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else if (status === Eligibility.INELIGIBLE) {
    return (
      <View style={[styles.container, styles.ineligible]}>
        <View style={styles.inner}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.topText}>
              <Fileclaim />
              <View style={styles.center}>
                <Text style={styles.text}>File a Claim</Text>
              </View>
              <Arrow />
            </View>

            <Text>
              Eligible class members who wish to receive payment can submit a
              claim electronically.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inner}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.topText}>
              <Optout />
              <View style={styles.center}>
                <Text style={styles.text}>Opt Out</Text>
              </View>
              <Arrow />
            </View>

            <Text>
              Submit a claim by July 14, 2023 if you wish to receive a payment
              from the settlement.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return <View />;
  }
}
