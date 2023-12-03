import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { router, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Toast, {
  BaseToast,
  ErrorToast,
  ToastConfig,
} from 'react-native-toast-message';

import styles from './styles';
import Arrow from '../../../../../assets/black-right-arrow.svg';
import ErrorIcon from '../../../../../assets/warning.svg';
import { colors } from '../../../../styles/colors';
import {
  getAllCaseIds,
  getCaseById,
  getCaseIdsFromUserId,
} from '../../../../supabase/queries/cases';
import { Case, CaseUid } from '../../../../types/types';
enum permissions {
  UNDETERMINED,
  DENIED,
  GRANTED,
}

function QRCodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState(permissions.UNDETERMINED);
  const [scanned, setScanned] = useState<boolean>(false);
  const [validIds, setValidIds] = useState<CaseUid[]>([]);
  const [userIds, setUserIds] = useState<CaseUid[]>([]);
  const [userCase, setUserCase] = useState<Case>();
  const navigation = useNavigation();

  const toastConfig: ToastConfig = {
    success: (props: any) => <BaseToast />,

    error: (props: any) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
        }}
        renderLeadingIcon={ErrorIcon}
        style={{
          borderLeftColor: colors.darkRed,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
      />
    ),
  };

  useEffect(() => {
    const getAllCasesAndValidCases = async () => {
      const allCases = await getAllCaseIds();
      setValidIds(allCases);
      const userCases = await getCaseIdsFromUserId('NO_ID');
      setUserIds(userCases);
    };
    getAllCasesAndValidCases();
  }, []);

  useEffect(() => {
    navigation.addListener('blur', async () => {
      setScanned(false);
      setUserCase(undefined);
    });
    navigation.addListener('focus', async () => {
      setScanned(false);
      setUserCase(undefined);
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
    if (!validIds.includes(caseId)) {
      Toast.show({
        type: 'error',
        text1: 'Not a valid QRCODE!',
        visibilityTime: 1000,
      });
    } else if (userIds.includes(caseId)) {
      Toast.show({
        type: 'error',
        text1: 'Duplicate cases not allowed!',
        visibilityTime: 1000,
      });
    } else if (!scanned) {
      const caseData: Case = await getCaseById(caseId);
      setUserCase(caseData);
      setScanned(true);
    }
  };

  const routeToAddCase = () => {
    if (!userCase) {
      return;
    }
    router.push({
      pathname: '/AllCases/QRCodeScanner/AddCase',
      params: {
        id: userCase.id,
        title: userCase.title,
        imageUrl: userCase.imageUrl,
        date: userCase.date,
        lawFirm: userCase.lawFirm,
        summary: userCase.summary,
      },
    });
  };

  if (hasPermission === permissions.DENIED) {
    return <Text>CANNOT ACCESS CAMERA!</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Point your Camera at the QR code.</Text>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={[styles.scanner]}
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

      <Toast position="bottom" bottomOffset={20} config={toastConfig} />
    </View>
  );
}

export default QRCodeScannerScreen;
