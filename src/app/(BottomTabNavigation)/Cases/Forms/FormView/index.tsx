import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

import { Form } from '../../../../../types/types';
import styles from '../styles';

export default function FormView() {
  const formData = useLocalSearchParams() as unknown as Form;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <WebView source={{ uri: formData.pdfLink }} />
    </View>
  );
}
