import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { getStatusColor } from '../../app/(BottomTabNavigation)/AllCases/utils';
interface CaseStatusBarProps {
  status: string;
}

export default function CaseStatusBar({ status }: CaseStatusBarProps) {
  const statusColor = getStatusColor(status);
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>Case Status:</Text>
      <View style={[styles.statusContainer, statusColor.background]}>
        <Text style={[styles.statusTextColor, statusColor.text]}>{status}</Text>
      </View>
    </View>
  );
}
