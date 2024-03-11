import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { formatDate } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { Update } from '../../types/types';

export default function UpdateItem(updateData: Update) {
  console.log(updateData);
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `/AllCases/Updates/UpdateView`,
          params: {
            updateUid: updateData.updateUid,
          },
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.imageContainer} />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{updateData.title}</Text>
          <Text style={styles.dateText}>{formatDate(updateData.date)}</Text>
          <Text>{updateData.blurb}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
