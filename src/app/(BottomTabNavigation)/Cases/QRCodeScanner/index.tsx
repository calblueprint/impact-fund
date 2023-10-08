import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

enum permissions {
  UNDETERMINED,
  DENIED,
  GRANTED,
}

function QRCodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState(permissions.UNDETERMINED);
  const [scanned, setScanned] = useState<boolean>(false);
  const [data, setData] = useState('NOTHING');

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
      <Text>Add a new case</Text>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={[styles.scanner]} // StyleSheet.absoluteFillObject,
      />
      <Image style={styles.crosshair} source={require('./img/crosshair.png')} />

      <Text>Current Scanning: {data}</Text>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default QRCodeScannerScreen;
