import CheckBox from 'expo-checkbox';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import LineSmall from '../../../../../assets/line-small.svg';
import { EligibilityRequirement } from '../../../../types/types';

export default function Requirement(item: EligibilityRequirement) {
  const [isChecked, setIsChecked] = useState(false);

  const onCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.requirementContainer}>
      <CheckBox value={isChecked} onValueChange={onCheck} />
      <View style={styles.innerRequirementBox}>
        <Text style={styles.bodyText}>{item.requirements}</Text>
      </View>
    </View>
  );
}
