import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import NotificationBell from '../../../assets/grey-notification-bell.svg';
import { formatDate } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { Update } from '../../types/types';

export default function UpdateItem(updateData: Update) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        router.push({
          pathname: `/AllCases/Updates/UpdateView/${updateData.updateUid}`,
        })
      }
    >
      <NotificationBell />
      <View style={styles.contentContainer}>
        <Text style={styles.categoryText}>
          {updateData.category.toUpperCase()}
        </Text>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText} numberOfLines={2}>
            {updateData.title}
          </Text>
        </View>
        <Text style={styles.bottomText}>
          {formatDate(updateData.date)} • {updateData.sender}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
