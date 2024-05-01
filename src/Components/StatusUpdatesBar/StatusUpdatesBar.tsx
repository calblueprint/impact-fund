import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import RightCaret from '../../../assets/right-caret.svg';
import { getStatusColor } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { shawdowStyles } from '../../styles/global';
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
    <TouchableOpacity
      style={[styles.updatesButton, shawdowStyles.shadowBorder]}
      onPress={() => {
        router.push({ pathname: `AllCases/Updates/${caseUid}` });
      }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.statusText}>Case Status</Text>

        <View style={styles.updatesContainer}>
          <Text style={styles.buttonText}>View all updates</Text>
          <RightCaret style={styles.icon} />
        </View>
      </View>

      <View style={[styles.statusContainer, statusColor.background]}>
        <Text style={[styles.statusTextColor, statusColor.text]}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
}
