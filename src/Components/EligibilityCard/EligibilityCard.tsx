import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { Case, Eligibility } from '../../types/types';
import { useRouter } from 'expo-router';

interface EligibilityCardProps {
  caseData: Case;
  status: Eligibility;
}

export default function EligibilityCard({
  caseData,
  status,
}: EligibilityCardProps) {
  const router = useRouter();
  if (status === Eligibility.ELIGIBLE) {
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
            <Text style={styles.text}>v</Text>
            <View style={styles.center}>
              <Text style={styles.text}>Check Eligibility</Text>
            </View>
            <Text style={styles.text}>{'->'}</Text>
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
              <Text style={styles.text}>{'->'}</Text>
              <View style={styles.center}>
                <Text style={styles.text}>File a Claim</Text>
              </View>
              <Text style={styles.text}>{'->'}</Text>
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
              <Text style={styles.text}>{'->'}</Text>
              <View style={styles.center}>
                <Text style={styles.text}>Opt Out</Text>
              </View>
              <Text style={styles.text}>{'->'}</Text>
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
