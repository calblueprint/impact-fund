import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

interface ToggleOptionsProps {
  isSwitched: boolean;
  setIsSwitched: React.Dispatch<React.SetStateAction<boolean>>;
}

function ToggleOptionsButton({
  isSwitched,
  setIsSwitched,
}: ToggleOptionsProps) {
  const handleToggle = () => {
    setIsSwitched(!isSwitched);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.toggleButtonContainer,
        isSwitched && styles.toggleSwitchCheckedButtonContainer,
      ]}
      onPress={handleToggle}
    >
      <View style={styles.inactiveTextContainer}>
        <View style={styles.inactiveTextStandardBox}>
          <Text style={styles.lightText}>File a claim</Text>
        </View>
        <View style={styles.inactiveTextStandardBox}>
          <Text style={styles.lightText}>Opt out</Text>
        </View>
      </View>
      <View
        style={[
          styles.toggleItem,
          isSwitched && styles.toggleSwitchCheckedItem,
        ]}
      >
        <Text style={styles.boldText}>
          {isSwitched ? 'Opt out' : 'File a claim'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ToggleOptionsButton;
