import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default function CaseSummaryCard() {
  return (
    <View style={styles.summaryContainer}>
      <Image
        style={styles.imageContainer}
        source={{
          uri: 'https://lh3.googleusercontent.com/p/AF1QipON-jkYMcZ-fR1qI2x1LqGBhM1fHAVRBhXui5Fu=s1360-w1360-h1020',
        }}
      />
      <View style={styles.headerContainer}>
        <Text>CaseSummaryCard</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text>CaseSummaryCard</Text>
      </View>
    </View>
  );
}
