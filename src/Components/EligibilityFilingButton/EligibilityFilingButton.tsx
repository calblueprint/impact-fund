import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import Fileclaim from '../../../assets/file-claim.svg';
import Arrow from '../../../assets/next.svg';
import { fonts } from '../../styles/fonts';
import { shawdowStyles } from '../../styles/global';

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
      style={[styles.buttonContainer, shawdowStyles.shadowBorder]}
      onPress={() => {
        router.push(route);
      }}
    >
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <Fileclaim />
        </View>
        <View style={styles.middleContainer}>
          <Text style={fonts.small}>{mainText}</Text>
        </View>
      </View>

      <View style={styles.horizontalLine} />

      <View style={styles.bottomContainer}>
        <Text style={fonts.greySmall}>{instructionText}</Text>
        <Arrow />
      </View>
    </TouchableOpacity>
  );
}
