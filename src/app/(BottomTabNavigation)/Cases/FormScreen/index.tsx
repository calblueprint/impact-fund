import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

// import { CaseFormsProps } from '../../../../types/types';

export default function FormScreen() {
  // const caseData = useLocalSearchParams() as unknown as CaseFormsProps;

  return (
    <View>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Text>Forms Screen</Text>
    </View>
  );
}
