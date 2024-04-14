import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import RightCaret from '../../../assets/right-caret.svg';
import { getStatusColor } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { CaseUid } from '../../types/types';

interface CaseStatusBarProps {
  caseUid: CaseUid;
  status: string;
}

export default function StatusUpdatesBar({
  caseUid,
  status,
}: CaseStatusBarProps) {
  const statusColor = getStatusColor(status);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.statusText}>Case Status:</Text>
        <TouchableOpacity
          style={styles.updatesButton}
          onPress={() => {
            router.push({ pathname: `AllCases/Updates/${caseUid}` });
          }}
        >
          <Text style={styles.buttonText}>View all updates</Text>
          <RightCaret />
        </TouchableOpacity>
      </View>
      <View style={[styles.statusContainer, statusColor.background]}>
        <Text style={[styles.statusTextColor, statusColor.text]}>{status}</Text>
      </View>
    </View>
  );
}
