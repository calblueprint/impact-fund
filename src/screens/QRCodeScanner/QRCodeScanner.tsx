<<<<<<< HEAD
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../../app/styles';

enum permissions {
  UNDETERMINED,
  DENIED,
  GRANTED,
}
=======
import { BarCodeScanner } from 'expo-barcode-scanner';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
>>>>>>> 8f6e63e (made no progress)

function QRCodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState(permissions.UNDETERMINED);
  const [scanned, setScanned] = useState<boolean>(false);
  const [data, setData] = useState('NO INFO YET!');

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(
        status === 'granted' ? permissions.GRANTED : permissions.DENIED,
      );
    };
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async (result: BarCodeScannerResult) => {
    if (!scanned) {
      setScanned(true);
      setData(result.data);
    }
  };

  if (hasPermission === permissions.DENIED) {
    return <Text>CANNOT ACCESS CAMERA!</Text>;
  }

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>This buhis the QR Code Scanner screen!</Text>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.scanner]}
      />
      <Text>{data}</Text>
=======
      <Text>This is the QR Code Scanner screen!</Text>
      <BarCodeScanner />
>>>>>>> 8f6e63e (made no progress)
    </View>
  );
}

export default QRCodeScannerScreen;
