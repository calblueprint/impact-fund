import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import { Case } from '../../types/types';

export default function CaseSummaryCard(caseData: Case) {
  return (
    <View style={styles.summaryContainer}>
      <Image
        style={styles.imageContainer}
        source={{
          uri: caseData.image,
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{caseData.title}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inLineInfo}>
          <Text style={styles.subText}>{String(caseData.date)}</Text>
          <Text style={styles.subText}>{caseData.lawFirm}</Text>
          <Icon style={styles.subText} name="dots-three-horizontal" />
        </View>
      </View>
    </View>
  );
}
