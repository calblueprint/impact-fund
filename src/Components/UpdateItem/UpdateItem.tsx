import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { formatDate } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { Update } from '../../types/types';

export default function UpdateItem(updateData: Update) {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `/AllCases/Updates/UpdateView/${updateData.updateUid}`,
          params: {
            lawFirm: updateData.lawFirm,
          },
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{updateData.title}</Text>
          <Text style={styles.bottomText}>
            {formatDate(updateData.date)} • {updateData.lawFirm}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
