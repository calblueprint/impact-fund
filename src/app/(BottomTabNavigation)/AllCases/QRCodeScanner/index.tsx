import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { router, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import {
  containsDuplicateCase,
  getCaseById,
  isValidCase,
} from '../../../../supabase/queries/cases';
import { Case } from '../../../../types/types';

enum permissions {
  UNDETERMINED,
  DENIED,
  GRANTED,
}

function QRCodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState(permissions.UNDETERMINED);
  const [scanned, setScanned] = useState<boolean>(false);
  const [toast, setToast] = useState<string>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('blur', async () => {
      setScanned(false);
    });
    navigation.addListener('focus', async () => {
      setScanned(false);
    });
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
        setToast('Not a valid QRCODE!');
        setScanned(false); // TODO: setTimeout here
        return;
      }
      const duplicate = await containsDuplicateCase(caseId);
      if (duplicate) {
        setToast('DUPLICATES NOT ALLOWED!');
        setScanned(false); // TODO: setTimeout here as well
        return;
      }
      const caseData: Case = await getCaseById(caseId);
      const { id, title, imageUrl, date, lawFirm, summary } = caseData;
      router.push({
        pathname: '/AllCases/QRCodeScanner/AddCase',
        params: {
          id,
          title,
          imageUrl,
          date,
          lawFirm,
          summary,
        },
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
      <Text style={styles.errorMessage}>{toast}</Text>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default QRCodeScannerScreen;