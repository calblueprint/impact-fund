import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from './styles';

export default function FormView() {
  const { formUrl } = useLocalSearchParams<{ formUrl: string }>();

  return (
    <View style={styles.container}>
      {formUrl === undefined ? (
        <Text>Failed to Load Form Data</Text>
      ) : (
        <WebView source={{ uri: formUrl }} />
      )}
    </View>
  );
}
