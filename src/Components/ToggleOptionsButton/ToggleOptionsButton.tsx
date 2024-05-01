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
      style={[
        styles.toggleButtonContainer,
        !isDefaultSelected && styles.toggleSwitchCheckedButtonContainer,
      ]}
      onPress={() => setSelected(!isDefaultSelected)}
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
          !isDefaultSelected && styles.toggleSwitchCheckedItem,
        ]}
      >
        <Text style={styles.boldText}>
          {isDefaultSelected ? 'File a claim' : 'Opt out'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ToggleOptionsButton;
