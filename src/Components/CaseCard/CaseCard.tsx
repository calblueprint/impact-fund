import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import ThreeDots from '../../../assets/three-dots.svg';
import {
  formatDate,
  getStatusColor,
} from '../../app/(BottomTabNavigation)/AllCases/utils';
import { Case } from '../../types/types';

function CaseCard(caseData: Case) {
  const statusColor = getStatusColor(caseData.caseStatus);
  return (
    <TouchableOpacity
      style={styles.caseCard}
      onPress={() =>
        router.push({
          pathname: `/AllCases/CaseScreen/${caseData.id}`,
        })
      }
    >
      <View style={styles.mainContentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText} numberOfLines={2}>
            {caseData.title}
          </Text>

          <View style={[styles.statusContainer, statusColor.background]}>
            <Text style={[styles.statusText, statusColor.text]}>
              {caseData.caseStatus}
            </Text>
          </View>
        </View>
        <Image
          style={styles.imageContainer}
          source={caseData.imageUrl}
          contentFit="cover"
          transition={300}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>
          {formatDate(caseData.date)} • {caseData.lawFirm}
        </Text>
        <View style={styles.threeDots}>
          <ThreeDots />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CaseCard;
