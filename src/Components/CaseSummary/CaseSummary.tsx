import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from './styles';
import { formatDate } from '../../app/(BottomTabNavigation)/Cases/utils';
import { CaseSummaryProps } from '../../types/types';

export default function CaseSummary() {
  const caseData = useLocalSearchParams() as unknown as CaseSummaryProps;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={styles.imageContainer}
          source={{
            uri: caseData.imageUrl,
          }}
        />
        <View style={styles.blurbContainer}>
          <Text style={styles.blurbText}>{caseData.blurb}</Text>
          <View style={styles.inLineSubInfo}>
            <Text style={styles.subText}>
              {formatDate(caseData.date)} • {caseData.lawFirm}
            </Text>
          </View>
        </View>
        <Text style={styles.summaryText}>{caseData.summary}</Text>
      </ScrollView>
    </View>
  );
}
