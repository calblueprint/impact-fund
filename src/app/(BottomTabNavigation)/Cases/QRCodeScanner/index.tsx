import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import supabase from '../../../../supabase/createClient';
import {
  containsDuplicateCase,
  getCaseById,
} from '../../../../supabase/queries/cases';
import styles from './styles';

enum permissions {
  UNDETERMINED,
  DENIED,
  GRANTED,
}

function QRCodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState(permissions.UNDETERMINED);
  const [message, setMessage] = useState('');
  const [scanned, setScanned] = useState(false);

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
    const caseId = result.data;
    if (isValidBarcode(caseId)) {
      const { id, title, summary, image } = await getCaseById(caseId);
      const duplicate = await containsDuplicateCase(id);
      if (duplicate) {
        console.log('YOU ALREADY HAVE THIS CASE!');
      } else {
        router.push({
          pathname: '/Cases/QRCodeScanner/AddCase',
          params: { id, title, summary, image },
        });
      }
    } else {
      setMessage('INVALID QR CODE!');
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
      <Text>Current Scanning: {message}</Text>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default QRCodeScannerScreen;
