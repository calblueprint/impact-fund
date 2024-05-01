import { router } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import Fileclaim from '../../../assets/file-claim.svg';
import Arrow from '../../../assets/next.svg';
import globalStyles from '../../styles/global';

interface EligibilityCardProps {
  mainText: string;
  instructionText: string;
  route: string;
}

export default function EligibleFilingButton({
  mainText,
  instructionText,
  route,
}: EligibilityCardProps) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, globalStyles.shadowBorder]}
      onPress={() => {
        router.push(route);
      }}
    >
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <Fileclaim />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.bodyText}>{mainText}</Text>
        </View>
      </View>

      <View style={styles.horizontalLine} />

      <View style={styles.bottomContainer}>
        <Text style={styles.smallText}>{instructionText}</Text>
        <Arrow />
      </View>
    </TouchableOpacity>
  );
}
