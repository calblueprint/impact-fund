import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

function ToggleOptionsButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.toggleButtonContainer,
        isChecked && styles.toggleSwitchCheckedButtonContainer,
      ]}
      onPress={handleToggle}
    >
      <View
        style={[styles.toggleItem, isChecked && styles.toggleSwitchCheckedItem]}
      />
      {isChecked}
    </TouchableOpacity>
  );
}

export default ToggleOptionsButton;
