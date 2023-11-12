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
          pathname: `/Cases/Forms`,
          params: {
            ...caseData,
          },
        })
      }
    >
      <View style={styles.container}>
        <Text>Route to Forms {'>'}</Text>
      </View>
    </TouchableOpacity>
  );
}
