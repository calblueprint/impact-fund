import { BarCodeScanner } from 'expo-barcode-scanner';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

function QRCodeScannerScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the QR Code Scanner screen!</Text>
      <BarCodeScanner />
    </View>
  );
}

export default QRCodeScannerScreen;
