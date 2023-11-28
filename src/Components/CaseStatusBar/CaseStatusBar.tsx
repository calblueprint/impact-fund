import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import { getStatusColor } from '../../app/(BottomTabNavigation)/AllCases/utils';
interface CaseStatusBarProps {
  status: string;
}

export default function CaseStatusBar({ status }: CaseStatusBarProps) {
  const statusColor = getStatusColor(status);
  return (
    <View style={styles.caseStatusContainer}>
      <TouchableOpacity style={styles.caseStatusContainerSmall}>
        <View>
          <Text style={styles.caseStatusText}>Case Status:</Text>
        </View>
        <View style={[styles.statusColor, statusColor.background]}>
          <Text style={[styles.statusTextColor, statusColor.text]}>
            {status}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
