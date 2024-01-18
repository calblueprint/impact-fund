import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function BottomTabButton({ ...props }) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
}
