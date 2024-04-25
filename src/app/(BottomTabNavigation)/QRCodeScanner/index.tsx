import { BarCodeScanner } from 'expo-barcode-scanner';
import { BarCodeScanningResult, Camera } from 'expo-camera';
import { router, useNavigation } from 'expo-router';
import { debounce } from 'lodash';
import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Toast, {
  ErrorToast,
  SuccessToast,
  ToastConfig,
} from 'react-native-toast-message';

import styles from './styles';
import Arrow from '../../../../assets/black-right-arrow.svg';
import CheckIcon from '../../../../assets/green-check.svg';
import ErrorIcon from '../../../../assets/warning.svg';
import { CaseContext } from '../../../context/CaseContext';
import { getScannedData } from '../../../supabase/queries/cases';
import { Case } from '../../../types/types';

enum permissions {
  UNDETERMINED,
  DENIED,
  GRANTED,
}

function QRCodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState(permissions.UNDETERMINED);
  const [scannedCase, setScannedCase] = useState<Case>();
  const [borderStyle, setBorderStyle] = useState(styles.notScanned);
  const [recentScan, setRecentScan] = useState<string>('');
  const [scannerState, setScannerState] = useState<
    'valid' | 'invalid' | 'scanned' | ''
  >('');
  const { allCases } = useContext(CaseContext);

  const navigation = useNavigation();

  const toastConfig: ToastConfig = {
    success: (props: any) => (
      <SuccessToast
        {...props}
        text1Style={{
          fontSize: 14,
          fontWeight: '400',
        }}
        renderLeadingIcon={CheckIcon}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 20,
        }}
      />
    ),

    error: (props: any) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 14,
          fontWeight: '400',
        }}
        renderLeadingIcon={ErrorIcon}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 20,
        }}
      />
    ),
  };

  const getBarCodeScannerPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(
      status === 'granted' ? permissions.GRANTED : permissions.DENIED,
    );
  };

  useEffect(() => {
    getBarCodeScannerPermissions();
  }, []);

  useEffect(() => {
    navigation.addListener('blur', async () => {
      setScannedCase(undefined);
      setBorderStyle(styles.notScanned);
    });
    navigation.addListener('focus', async () => {
      setScannedCase(undefined);
      setBorderStyle(styles.notScanned);
    });
  }, [navigation]);

  function resetScanner() {
    setScannerState('');
    setRecentScan('');
    setBorderStyle(styles.notScanned);
  }

  const debouncedFetchData = useCallback(debounce(resetScanner, 1500), []);

  // function called after every `BarCodeScanningResult` event triggered by scanner
  const handleBarCodeScanned = (result: BarCodeScanningResult) => {
    if (result.data !== recentScan) {
      // process the barcode data if different from previous scans
      processBarCodeData(result.data);
    }
    setRecentScan(result.data);

    // trigger scanner feedback depending on scanning result
    switch (scannerState) {
      case 'invalid': {
        Toast.show({
          type: 'error',
          text1: 'Sorry! This QR code is invalid.',
          visibilityTime: 1500,
        });
        break;
      }
      case 'scanned': {
        Toast.show({
          type: 'error',
          text1: "You've already scanned this QR code",
          visibilityTime: 1500,
        });
        break;
      }
      case 'valid': {
        Toast.show({
          type: 'success',
          text1: 'QR code successfully scanned',
          visibilityTime: 1500,
        });
        break;
      }
    }
    debouncedFetchData();
  };

  const processBarCodeData = async (data: string) => {
    const result = await getScannedData(data);

    if (result.error) {
      setScannerState('invalid');
      setScannedCase(undefined);
      setBorderStyle(styles.invalidScan);
      return;
    }

    if (result.data) {
      const newCase: Case = result.data.case;

      // check whether the case has already been scanned
      for (const existingCase of allCases) {
        if (existingCase.id === newCase.id) {
          setScannerState('scanned');
          setScannedCase(undefined);
          setBorderStyle(styles.invalidScan);
          return;
        }
      }

      // valid case scanned if this point reached
      setScannedCase(newCase);
      setScannerState('valid');
      setBorderStyle(styles.validScan);
    }
  };

  const routeToAddCase = () => {
    if (scannedCase) {
      router.push(`/QRCodeScanner/AddCase/${scannedCase.id}`);
      resetScanner();
    }
  };

  if (hasPermission === permissions.DENIED) {
    return <Text>CANNOT ACCESS CAMERA!</Text>;
  }

  return (
    <View style={styles.container}>
      <Toast position="top" topOffset={20} config={toastConfig} />
      <Text style={styles.topText}>Point your Camera at the QR code.</Text>
      <Camera
        onBarCodeScanned={handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          interval: 1000,
        }}
        style={[styles.scanner, borderStyle]}
      />

      {scannedCase && (
        <TouchableOpacity
          style={styles.viewCaseButton}
          onPress={() => routeToAddCase()}
        >
          <Text style={styles.caseButtonText}>View Case</Text>
          <Arrow />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default QRCodeScannerScreen;
