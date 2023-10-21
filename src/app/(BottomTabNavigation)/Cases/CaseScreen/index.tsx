import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Case } from '../../../../types/types';

function CasesScreen() {
  const caseData = useLocalSearchParams() as unknown as Case;

  console.log(caseData);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CasesScreen;
