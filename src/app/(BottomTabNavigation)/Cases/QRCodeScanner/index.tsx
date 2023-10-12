import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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

  const isValidBarcode = (caseId: string) => true;

  const handleBarCodeScanned = async (result: BarCodeScannerResult) => {
    if (!scanned) {
      setData(result.data);

      if (isValidBarcode(data)) {
        setScanned(true);
        router.push({
          pathname: '/Cases/QRCodeScanner/AddCase', // theres actually no mf way its this hard to pass some information to a page bruh
          params: { caseId: data },
        });
      } else {
        setData('NOT A VALID BARCODE');
      }
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
        style={[styles.scanner]}
      />
      <Text>Current Scanning: {data}</Text>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default QRCodeScannerScreen;
