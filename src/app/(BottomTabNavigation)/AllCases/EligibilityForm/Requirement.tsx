import CheckBox from 'expo-checkbox';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import LineSmall from '../../../../../assets/line-small.svg';
import { colors } from '../../../../styles/colors';
import { EligibilityRequirement } from '../../../../types/types';

export default function Requirement(item: EligibilityRequirement) {
  const [isChecked, setIsChecked] = useState(false);

  const onCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity style={styles.requirementContainer} onPress={onCheck}>
      <CheckBox value={isChecked} color={colors.darkGrey} />
      <View style={styles.innerRequirementBox}>
        <Text
          style={
            isChecked
              ? [styles.bodyText, styles.inactiveColor]
              : [styles.bodyText, styles.activeColor]
          }
        >
          {item.requirements}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
