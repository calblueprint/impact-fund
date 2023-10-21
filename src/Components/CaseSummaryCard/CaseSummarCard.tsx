import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

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
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          New study finds that vaping is actually really bad lmao here is how
          you might be able to get money from Juul
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inLineInfo}>
          <Text style={styles.subText}>Sep 17, 2023</Text>
          <Text style={styles.subText}>American Civil Liberties Union</Text>
          <Icon color="rgba(0, 0, 0, 0.50)" name="dots-three-horizontal" />
        </View>
      </View>
    </View>
  );
}
