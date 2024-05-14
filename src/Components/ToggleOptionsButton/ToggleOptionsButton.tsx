import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

interface ToggleOptionsProps {
  isDefaultSelected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

function ToggleOptionsButton({
  isDefaultSelected,
  setSelected,
}: ToggleOptionsProps) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.toggleButtonContainer}
      onPress={() => setSelected(!isDefaultSelected)}
    >
      <View style={isDefaultSelected ? styles.activeItem : styles.inactiveItem}>
        <Text style={isDefaultSelected ? styles.boldText : styles.lightText}>
          File a claim
        </Text>
      </View>
      <View style={isDefaultSelected ? styles.inactiveItem : styles.activeItem}>
        <Text style={isDefaultSelected ? styles.lightText : styles.boldText}>
          Opt out
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ToggleOptionsButton;
