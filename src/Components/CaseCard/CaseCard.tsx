import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import {
  formatDate,
  getStatusColor,
} from '../../app/(BottomTabNavigation)/AllCases/utils';
import { shawdowStyles } from '../../styles/global';
import { Case } from '../../types/types';

function CaseCard(caseData: Case) {
  const statusColor = getStatusColor(caseData.caseStatus);
  return (
    <TouchableOpacity
      style={[styles.caseCard, shawdowStyles.shadowBorder]}
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
            <Text
              style={[styles.statusText, statusColor.text]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
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
      </View>
    </TouchableOpacity>
  );
}

export default CaseCard;
