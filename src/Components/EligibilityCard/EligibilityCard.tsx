import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { Eligibility } from '../../types/types';
import { useRouter } from 'expo-router';

export default function EligibilityCard() {
  const eligible = Eligibility.ELIGIBLE;
  const router = useRouter();
  if (eligible === Eligibility.ELIGIBLE) {
    return (
      <View style={[styles.container, styles.eligible]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/Cases/CaseScreen/EligibilityForm')}
        >
          <Text>CHECK ELEGIBILITY</Text>
        </TouchableOpacity>
        <Image style={styles.arrow} source={{ uri: './icons/coolicon.svg' }} />
      </View>
    );
  } else if (eligible === Eligibility.INELIGIBLE) {
    return (
      <View style={[styles.container, styles.ineligible]}>
        <View style={styles.inner}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.optout}>
              <Text>OPT OUT</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.inner}>
          <TouchableOpacity style={styles.button}>
            <Text>FILE CLAIM</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return <View />;
  }
}
