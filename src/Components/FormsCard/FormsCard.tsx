import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Case } from '../../types/types';

export default function FormsCard(caseData: Case) {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `/Cases/FormScreen`,
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
        <Text>Route to Forms {'>'}</Text>
      </View>
    </TouchableOpacity>
  );
}
