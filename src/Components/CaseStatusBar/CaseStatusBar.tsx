import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { getStatusColor } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { shawdowStyles } from '../../styles/global';

interface CaseStatusBarProps {
  status: string;
}

export default function CaseStatusBar({ status }: CaseStatusBarProps) {
  const statusColor = getStatusColor(status);
  return (
    <View style={[styles.container, shawdowStyles.shadowBorder]}>
      <Text style={styles.statusText}>Case Status:</Text>
      <View style={[styles.statusContainer, statusColor.background]}>
        <Text
          style={[styles.statusTextColor, statusColor.text]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {status}
        </Text>
      </View>
    </View>
  );
}
