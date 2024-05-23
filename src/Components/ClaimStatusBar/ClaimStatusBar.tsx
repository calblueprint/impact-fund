import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import CircleCheck from '../../../assets/circle-check-black.svg';
import { getStatusColor } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { shawdowStyles } from '../../styles/global';

interface ClaimStatusBarProps {
  status: string;
}

export default function CaseStatusBar({ status }: ClaimStatusBarProps) {
  const statusColor = getStatusColor(status);
  return (
    <View style={[styles.container, shawdowStyles.shadowBorder]}>
      <Text style={styles.claimText}>Claim Status:</Text>
      <View style={[statusColor.background, styles.statusContainer]}>
        <CircleCheck style={styles.icon} />
        <Text style={[styles.statusText]}>{status}</Text>
      </View>
    </View>
  );
}
