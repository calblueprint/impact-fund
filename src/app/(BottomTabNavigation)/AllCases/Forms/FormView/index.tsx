import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from './styles';
import { Form } from '../../../../../types/types';

export default function FormView() {
  const formData = useLocalSearchParams() as unknown as Form;

  return (
    <View style={styles.container}>
      <WebView source={{ uri: formData.formUrl }} />
    </View>
  );
}
