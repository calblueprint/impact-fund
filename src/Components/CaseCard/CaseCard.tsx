import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

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
          <View style={styles.titleContainer}>
            <Text style={styles.titleText} adjustsFontSizeToFit>
              {caseData.title}
            </Text>
          </View>
          <View style={[styles.statusContainer, statusColor.background]}>
            <Text style={[styles.statusText, statusColor.text]}>
              {caseData.caseStatus}
            </Text>
          </View>
        </View>
        <Image
          style={styles.imageContainer}
          source={{
            uri: caseData.imageUrl,
          }}
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
