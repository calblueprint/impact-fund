import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import RedHomeIcon from '../../../assets/bottom-tab-home.svg';

export default function BottomTabButton({ ...props }) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <RedHomeIcon />
      <Text>Button</Text>
    </TouchableOpacity>
  );
}
