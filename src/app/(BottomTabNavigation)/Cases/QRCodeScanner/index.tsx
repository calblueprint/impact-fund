import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { router, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { getCaseById, isValidCase } from '../../../../supabase/queries/cases';

enum permissions {
  UNDETERMINED,
  DENIED,
  GRANTED,
}

function QRCodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState(permissions.UNDETERMINED);
  const [scanned, setScanned] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', async () => {
      setScanned(false);
    });
    return unsubscribe;
  }, [navigation]);

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
    const caseId = result.data;
    if (!scanned) {
      setScanned(true);
      const valid = await isValidCase(caseId);
      if (!valid) {
        // TODO: Display error toast message
        return;
      }
      const data = await getCaseById(caseId);

      const { id, title, image, summary } = data;
      router.push({
        pathname: '/Cases/QRCodeScanner/AddCase',
        params: { id, title, image, summary },
      });
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
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default QRCodeScannerScreen;
