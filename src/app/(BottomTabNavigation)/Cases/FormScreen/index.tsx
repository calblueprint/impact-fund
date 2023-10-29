import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from './styles';

// import { CaseFormsProps } from '../../../../types/types';

export default function FormScreen() {
  // const caseData = useLocalSearchParams() as unknown as CaseFormsProps;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <WebView
        source={{ uri: 'https://www.africau.edu/images/default/sample.pdf' }}
      />
    </View>
  );
}
