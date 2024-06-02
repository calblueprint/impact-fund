import {
  CameraView,
  useCameraPermissions,
  BarcodeScanningResult,
} from 'expo-camera';
import { router, useNavigation } from 'expo-router';
import { debounce } from 'lodash';
import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Text, View } from 'react-native';
import Toast, {
  ErrorToast,
  SuccessToast,
  ToastConfig,
} from 'react-native-toast-message';

import styles from './styles';
import Camera from '../../../../assets/camera-disabled.svg';
import CheckIcon from '../../../../assets/green-check.svg';
import Arrow from '../../../../assets/right-arrow-white.svg';
import ErrorIcon from '../../../../assets/warning.svg';
import { ButtonBlack } from '../../../Components/AuthButton/AuthButton';
import { CaseContext } from '../../../context/CaseContext';
import { fonts } from '../../../styles/fonts';
import { device } from '../../../styles/global';
import { getScannedData } from '../../../supabase/queries/cases';
import { Case } from '../../../types/types';

const toastConfig: ToastConfig = {
  success: (props: any) => (
    <SuccessToast
      {...props}
      text1Style={fonts.small}
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
      text1Style={fonts.small}
      renderLeadingIcon={ErrorIcon}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
      }}
    />
  ),
};

export default function QRCodeScannerScreen() {
  const [scannedCase, setScannedCase] = useState<Case>();
  const [borderStyle, setBorderStyle] = useState(styles.notScanned);
  const [recentScan, setRecentScan] = useState<string>('');
  const [scannerState, setScannerState] = useState<
    'valid' | 'invalid' | 'scanned' | ''
  >('');
  const { allCases } = useContext(CaseContext);

  const navigation = useNavigation();

  const [permission, requestPermission] = useCameraPermissions();

  function resetScanner() {
    setScannerState('');
    setRecentScan('');
    setBorderStyle(styles.notScanned);
    Toast.hide();
  }

  const debouncedResetScanner = useCallback(debounce(resetScanner, 1500), []);

  // function called after every `BarCodeScanningResult` event triggered by scanner
  async function handleBarCodeScanned(result: BarcodeScanningResult) {
    if (result.data !== recentScan) {
      // process the barcode data if different from previous scans
      resetScanner();
      setScannedCase(undefined);
      await processBarCodeData(result.data);
    }
    setRecentScan(result.data);

    // trigger scanner feedback depending on scanning result
    switch (scannerState) {
      case 'invalid': {
        Toast.show({
          type: 'error',
          text1: 'Sorry! This QR code is invalid.',
        });
        break;
      }
      case 'scanned': {
        Toast.show({
          type: 'error',
          text1: "You've already scanned this QR code",
        });
        break;
      }
      case 'valid': {
        Toast.show({
          type: 'success',
          text1: 'QR code successfully scanned',
        });
        break;
      }
    }
    debouncedResetScanner();
  }

  async function processBarCodeData(data: string) {
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
  }

  const routeToAddCase = () => {
    if (scannedCase) {
      router.push(`/QRCodeScanner/AddCase/${scannedCase.id}`);
    }
  };

  useEffect(() => {
    requestPermission();
  });

  useEffect(() => {
    navigation.addListener('blur', async () => {
      resetScanner();
      setScannedCase(undefined);
    });
    navigation.addListener('focus', async () => {
      resetScanner();
      setScannedCase(undefined);
      setTimeout(() => {}, 1000);
    });
  }, [navigation]);

  return !permission ? (
    <Text>Loading Permissions...</Text>
  ) : (
    <View style={[device.safeArea, styles.centered]}>
      <Toast position="top" topOffset={20} config={toastConfig} />

      {!permission.granted ? (
        <View style={[styles.scanner, styles.permissionDenied]}>
          <Text style={[fonts.small, styles.alignedText]}>
            You must enable camera permissions to use the QR code scanner.
          </Text>
          <Camera />
        </View>
      ) : (
        <>
          <Text style={fonts.condensedHeadline}>
            Point your Camera at the QR code.
          </Text>
          <CameraView
            onBarcodeScanned={handleBarCodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ['qr'],
            }}
            style={[styles.scanner, borderStyle]}
          />
        </>
      )}

      {scannedCase && (
        <ButtonBlack
          style={styles.viewCaseButton}
          onPress={() => routeToAddCase()}
        >
          <Text style={fonts.whiteButton}>View Case</Text>
          <Arrow />
        </ButtonBlack>
      )}
    </View>
  );
}
