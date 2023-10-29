import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from '../styles';

type FormParams = {
  pdfLink: string;
};

export default function FormView() {
  const formData = useLocalSearchParams() as FormParams;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <WebView source={{ uri: formData.pdfLink }} />
    </View>
  );
}
