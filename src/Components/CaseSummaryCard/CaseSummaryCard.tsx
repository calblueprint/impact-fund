import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import RightCaret from '../../../assets/right-caret.svg';
import { formatDate } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { fonts } from '../../styles/fonts';
import { shawdowStyles } from '../../styles/global';
import { CaseSummaryProps } from '../../types/types';

export default function CaseSummaryCard({
  id,
  imageUrl,
  briefSummary,
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
      <View style={[styles.container, shawdowStyles.shadowBorder]}>
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
          <Text style={fonts.condensedHeadline}>{briefSummary}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={fonts.greySmall}>Read full case summary</Text>
          <RightCaret />
        </View>
      </View>
    </TouchableOpacity>
  );
}
