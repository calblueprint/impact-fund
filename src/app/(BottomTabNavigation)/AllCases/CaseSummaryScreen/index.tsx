import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from './styles';
import ExternalSiteLink from '../../../../Components/ExternalSiteLink/ExternalSiteLink';
import { CaseSummaryProps } from '../../../../types/types';
import { formatDate } from '../utils';

export default function CaseSummaryScreen() {
  const caseData = useLocalSearchParams() as unknown as CaseSummaryProps;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.outerScroll}
        contentContainerStyle={styles.innerScroll}
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
            <Text style={[styles.subText, styles.lawFirmText]}>
              {caseData.lawFirm}
            </Text>
            <Text style={[styles.subText, styles.dateText]}>
              {' '}
              • {formatDate(caseData.date)}
            </Text>
          </View>
        </View>
        <Text style={styles.summaryText}>{caseData.summary}</Text>
        <ExternalSiteLink
          text="Learn more on case website"
          url={caseData.caseSite}
        />
      </ScrollView>
    </View>
  );
}
