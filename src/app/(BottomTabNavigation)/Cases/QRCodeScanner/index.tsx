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

  const isValidBarcode = (caseId: string) =>
    caseId === 'NOTHING' || caseId === 'NOT A VALID BARCODE';

  const handleBarCodeScanned = async (result: BarCodeScannerResult) => {
    if (!scanned) {
      setData(result.data);
      if (isValidBarcode(data)) {
        setScanned(true);
        router.push({
          pathname: '/Cases/QRCodeScanner/AddCase',
          params: { caseId: data },
        });
        setData('NOTHING');
        setScanned(false); // Allow for more scanning
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
<<<<<<< HEAD
<<<<<<< HEAD
      <Text>Add a new case</Text>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
<<<<<<< HEAD
<<<<<<< HEAD
        style={[styles.scanner]}
      />
=======
        style={[StyleSheet.absoluteFillObject]}
=======
        style={[styles.scanner]} // StyleSheet.absoluteFillObject,
>>>>>>> a3b118f (did branch)
      />
      <Image style={styles.crosshair} source={require('./img/crosshair.png')} />

>>>>>>> 4bca331 (bruh)
      <Text>Current Scanning: {data}</Text>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>Go Back</Text>
      </TouchableOpacity>
=======
      <Text>This is the QR Code Scanner screen!</Text>
      <BarCodeScanner />
>>>>>>> 93e502f (made no progress)
=======
      <Text>This buhis the QR Code Scanner screen!</Text>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.scanner]}
      />
      <Text>{data}</Text>
>>>>>>> b044d9a (wip)
    </View>
  );
}

export default QRCodeScannerScreen;
