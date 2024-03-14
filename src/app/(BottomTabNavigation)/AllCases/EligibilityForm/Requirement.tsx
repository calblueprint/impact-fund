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
    <View>
      <View style={styles.list}>
        <CheckBox value={isChecked} onValueChange={onCheck} />
        <Text style={styles.reqs}>{item.requirements}</Text>
      </View>
      <LineSmall
        style={{
          /*alignItems: 'flex-end'*/ //this doesn't work at all for some reason
          marginLeft: 70,
        }}
      />
    </View>
  );
}
