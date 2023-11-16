import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { colors } from '../../styles/colors';

interface CaseStatusBarProps {
  status: string;
}

export default function CaseStatusBar({ status }: CaseStatusBarProps) {
  const getStatusColor = (status: string) => {
    if (
      status === 'In Progress' ||
      status === 'New Case' ||
      status === 'Settled' ||
      status === 'Appeal' ||
      status === 'Payment Processing' ||
      status === 'Payment Distributed'
    ) {
      return {
        background: {
          backgroundColor: colors.lightGreen,
          borderColor: colors.darkGreen,
        },
        text: { color: colors.darkGreen },
      };
    } else if (status === 'Pending') {
      return {
        background: {
          backgroundColor: colors.lightYellow,
          borderColor: colors.darkYellow,
        },
        text: { color: colors.darkYellow },
      };
    } else if (status === 'Action Required') {
      return {
        background: {
          backgroundColor: colors.lightRed,
          borderColor: colors.darkRed,
        },
        text: { color: colors.darkRed },
      };
    } else {
      return {
        background: {
          backgroundColor: colors.lightGrey,
          borderColor: colors.darkGrey,
        },
        text: { color: colors.darkGrey },
      };
    }
  };
  const statusColor = getStatusColor(status);
  return (
    <View style={styles.caseStatusContainer}>
      <View style={styles.caseStatusContainerSmall}>
        <View>
          <Text style={styles.caseStatusText}>Case Status:</Text>
        </View>
        <View style={[styles.statusColor, statusColor.background]}>
          <Text style={[styles.statusTextColor, statusColor.text]}>
            {status}
          </Text>
        </View>
      </View>
    </View>
  );
}
