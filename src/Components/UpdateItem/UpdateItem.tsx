import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import NotificationBell from '../../../assets/notification-bell.svg';
import { formatDate } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { Update } from '../../types/types';

export default function UpdateItem(updateData: Update) {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `/AllCases/Updates/UpdateView/${updateData.updateUid}`,
        })
      }
    >
      <View style={styles.container}>
        <NotificationBell />
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>{updateData.title}</Text>
          <View style={styles.instructionContainer}>
            <Text>VIEW UPDATES</Text>
          </View>
          <Text style={styles.bottomText}>
            {formatDate(updateData.date)} • {updateData.lawFirm}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
