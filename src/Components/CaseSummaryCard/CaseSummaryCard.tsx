import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import { Case } from '../../types/types';

export default function CaseSummaryCard(caseData: Case) {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `/Cases/CaseSummaryScreen`,
          params: {
            blurb: caseData.blurb,
            summary: caseData.summary,
            image: caseData.image,
            caseSite: caseData.caseSite,
            date: caseData.date,
            lawFirm: caseData.lawFirm,
          },
        })
      }
    >
      <View style={styles.summaryContainer}>
        <Image
          style={styles.imageContainer}
          source={{
            uri: caseData.image,
          }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.blurbText}>{caseData.blurb}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.inLineInfo}>
            <Text style={styles.subText}>{String(caseData.date)}</Text>
            <Text style={styles.subText}>{caseData.lawFirm}</Text>
            <Icon style={styles.subText} name="dots-three-horizontal" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
