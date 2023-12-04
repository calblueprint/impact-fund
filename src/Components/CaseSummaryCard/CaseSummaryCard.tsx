import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import RightCaret from '../../../assets/right-caret.svg';
import { formatDate } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { Case } from '../../types/types';

export default function CaseSummaryCard(caseData: Case) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: `/AllCases/CaseSummaryScreen/${caseData.id}`,
        });
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={{
            uri: caseData.imageUrl,
          }}
        />
        <View style={styles.infoContainer}>
          <View style={styles.inLineInfo}>
            <Text style={[styles.subText, styles.lawFirmText]}>
              {caseData.lawFirm}
            </Text>
            <Text style={[styles.subText, styles.dateText]}>
              {' '}
              • {formatDate(caseData.date)}
            </Text>
          </View>
          <Text style={styles.blurbText}>{caseData.blurb}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Read full case summary</Text>
          <RightCaret />
        </View>
      </View>
    </TouchableOpacity>
  );
}
