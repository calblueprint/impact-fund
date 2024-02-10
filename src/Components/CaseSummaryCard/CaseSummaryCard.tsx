import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import RightCaret from '../../../assets/right-caret.svg';
import { formatDate } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { CaseSummaryProps } from '../../types/types';

export default function CaseSummaryCard({
  id,
  imageUrl,
  blurb,
  lawFirm,
  date,
}: CaseSummaryProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: `/AllCases/CaseSummaryScreen/${id}`,
        });
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={imageUrl}
          contentFit="cover"
          transition={300}
        />
        <View style={styles.infoContainer}>
          <View style={styles.inLineInfo}>
            <Text style={[styles.subText, styles.lawFirmText]}>{lawFirm}</Text>
            <Text style={[styles.subText, styles.dateText]}>
              {' '}
              • {formatDate(date)}
            </Text>
          </View>
          <Text style={styles.blurbText}>{blurb}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Read full case summary</Text>
          <RightCaret />
        </View>
      </View>
    </TouchableOpacity>
  );
}
