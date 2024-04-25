import { BarCodeScanner } from 'expo-barcode-scanner';
import { BarCodeScanningResult, Camera } from 'expo-camera';
import { router, useNavigation } from 'expo-router';
import React, { useEffect, useState, useContext } from 'react';
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
import {
  getAllCaseIds,
  getCaseById,
  getCaseIdsFromUserId,
  getCaseOrError,
} from '../../../supabase/queries/cases';
import { Case, CaseUid } from '../../../types/types';

enum permissions {
  UNDETERMINED,
  DENIED,
  GRANTED,
}

function QRCodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState(permissions.UNDETERMINED);
  const [validIds, setValidIds] = useState<CaseUid[]>([]);
  const [userIds, setUserIds] = useState<CaseUid[]>([]);
  const [userCase, setUserCase] = useState<Case>();
  const [borderStyle, setBorderStyle] = useState(styles.notScanned);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [recentScan, setRecentScan] = useState<string>('');
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

  const getAllCasesAndValidCases = async () => {
    const allCases = await getAllCaseIds();
    setValidIds(allCases);
    const userCases = await getCaseIdsFromUserId('NO_ID');
    setUserIds(userCases);
  };

  const getBarCodeScannerPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(
      status === 'granted' ? permissions.GRANTED : permissions.DENIED,
    );
  };

  const setValidBarcodeStyle = () => {
    if (!isActive) {
      setBorderStyle(styles.validScan);
      setIsActive(true);
      setTimeout(() => {
        setBorderStyle(styles.notScanned);
        setIsActive(false);
      }, 1500);
    }
  };

  const setInvalidBarcodeStyle = async () => {
    if (!isActive) {
      setBorderStyle(styles.invalidScan);
      setIsActive(true);
      setTimeout(() => {
        setBorderStyle(styles.notScanned);
        setIsActive(false);
      }, 1500);
    }
  };

  useEffect(() => {
    getBarCodeScannerPermissions();
    getAllCasesAndValidCases();
  }, []);

  useEffect(() => {
    navigation.addListener('blur', async () => {
      setUserCase(undefined);
      setBorderStyle(styles.notScanned);
    });
    navigation.addListener('focus', async () => {
      setUserCase(undefined);
      setBorderStyle(styles.notScanned);
    });
  }, [navigation]);

  // const handleBarCodeScanned = (result: BarCodeScanningResult) => {
  //   if (result.data !== recentScan) {
  //     processBarCodeData(result.data);
  //   }
  //   setRecentScan(result.data);
  //   // console.log(result.data, typeof result.data);
  // };

  const processBarCodeData = async (result: BarCodeScanningResult) => {
    // const result = await getCaseOrError(data);

    // // if result doesn't exist

    // console.log(result);

    // if (result.res.error) {
    //   console.log(result.res.error);
    //   return;
    // }

    // const caseData: Case = result.res.data as Case;
    // console.log(caseData);

    // if (allCases.includes(caseData)) {
    //   console.log("You've already scanned this QR code");
    //   return;
    // }

    // console.log('should be good to go!');

    const caseId = result.data;

    if (!validIds.includes(caseId)) {
      setUserCase(undefined);
      setInvalidBarcodeStyle();
      Toast.show({
        type: 'error',
        text1: 'Sorry! This QR code is invalid.',
        visibilityTime: 1500,
      });
    } else if (userIds.includes(caseId)) {
      setUserCase(undefined);
      setInvalidBarcodeStyle();
      Toast.show({
        type: 'error',
        text1: "You've already scanned this QR code.",
        visibilityTime: 1500,
      });
    } else {
      const caseData: Case = await getCaseById(caseId);
      setUserCase(caseData);
      setValidBarcodeStyle();
      Toast.show({
        type: 'success',
        text1: 'QR code successfully scanned',
        visibilityTime: 1500,
      });
    }
  };

  const routeToAddCase = () => {
    if (!userCase) {
      return;
    }
    router.push({
      pathname: `/QRCodeScanner/AddCase/${userCase.id}`,
    });
  };

  if (hasPermission === permissions.DENIED) {
    return <Text>CANNOT ACCESS CAMERA!</Text>;
  }

  return (
    <View style={styles.container}>
      <Toast position="top" topOffset={20} config={toastConfig} />
      <Text style={styles.topText}>Point your Camera at the QR code.</Text>
      <Camera
        onBarCodeScanned={processBarCodeData}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          interval: 1000,
        }}
        style={[styles.scanner, borderStyle]}
      />

      {userCase && (
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
