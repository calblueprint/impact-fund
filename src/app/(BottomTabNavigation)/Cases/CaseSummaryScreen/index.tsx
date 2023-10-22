import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import { Case } from '../../../../types/types';

function CasesScreen() {
  const caseData = useLocalSearchParams();

  const { blurb, summary, image, caseSite, date, lawFirm } = caseData;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.imageContainer}
        source={{
          uri: image,
        }}
      />
      <Text>{blurb}</Text>
      <Text>{date}</Text>
      <Text>{lawFirm}</Text>
      <Text>{summary}</Text>
      <Text>{caseSite}</Text>
    </View>
  );
}

export default CasesScreen;
