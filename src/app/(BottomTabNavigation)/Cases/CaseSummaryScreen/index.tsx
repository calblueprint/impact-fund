import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import styles from './styles';

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
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={styles.imageContainer}
          source={{
            uri: image,
          }}
        />
        <View style={styles.blurbContainer}>
          <Text style={styles.blurbText}>{blurb}</Text>
          <View style={styles.inLineSubInfo}>
            <Text style={styles.subText}>{date}</Text>
            <Text style={styles.subText}>{lawFirm}</Text>
          </View>
        </View>
        <Text style={styles.summaryText}>{summary}</Text>
        <Text>{caseSite}</Text>
      </ScrollView>
    </View>
  );
}

export default CasesScreen;
