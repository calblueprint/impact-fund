import CheckBox from 'expo-checkbox';
import React, { MutableRefObject, ReactNode, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { colors } from '../../../../styles/colors';
import { EligibilityRequirement } from '../../../../types/types';

interface requirementProps {
  requirement: string;
  checkCount: number;
  setCheckCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Requirement({
  requirement,
  checkCount,
  setCheckCount,
}: requirementProps): ReactNode {
  const [isChecked, setIsChecked] = useState(false);

  const onCheck = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setCheckCount(checkCount - 1);
    } else {
      setCheckCount(checkCount + 1);
    }
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
          {requirement}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
