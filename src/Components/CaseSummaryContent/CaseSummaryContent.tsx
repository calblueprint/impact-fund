import { Image } from 'expo-image';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';
import { formatDate } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { CaseSummaryProps } from '../../types/types';

export default function CaseSummaryContent({
  imageUrl,
  blurb,
  lawFirm,
  date,
  summary,
}: CaseSummaryProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.outerScroll}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={styles.imageContainer}
          source={imageUrl}
          contentFit="cover"
          transition={300}
        />
        <View style={styles.blurbContainer}>
          <Text style={styles.blurbText}>{blurb}</Text>
          <View style={styles.inLineSubInfo}>
            <Text style={[styles.subText, styles.lawFirmText]}>{lawFirm}</Text>
            <Text style={[styles.subText, styles.dateText]}>
              {' '}
              • {formatDate(date)}
            </Text>
          </View>
        </View>
        <Text style={styles.summaryText}>{summary}</Text>
      </ScrollView>
    </View>
  );
}
