import CheckBox from 'expo-checkbox';
import React, { ReactNode, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

interface requirementProps {
  requirement: string;
  checkCount: number;
  setCheckCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function PressableRequirement({
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
        <Text style={isChecked ? [fonts.body] : [fonts.greyBody]}>
          {requirement}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
