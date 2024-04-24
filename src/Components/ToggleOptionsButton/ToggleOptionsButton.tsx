import { Link } from 'expo-router';
import React, { useState, ChangeEvent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

function ToggleOptionsButton() {
  return (
    <View style={styles.toggleButtonContainer}>
      <View style={styles.toggleItem} />
    </View>
  );
}

export default ToggleOptionsButton;
