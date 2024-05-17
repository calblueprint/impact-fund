import { router, useLocalSearchParams } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import AddCaseIcon from '../../../../../assets/add-case-icon.svg';
import CancelIcon from '../../../../../assets/cancel-x-icon.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../../components/AuthButton/AuthButton';
import CaseSummaryContent from '../../../../components/CaseSummaryContent/CaseSummaryContent';
import { CaseContext } from '../../../../context/CaseContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';
import { getCaseById } from '../../../../supabase/queries/cases';
import { CaseUid, Case } from '../../../../types/types';

export default function AddCase() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const { joinCase } = useContext(CaseContext);
  const [caseData, setCaseData] = useState<Case>();

  const addToCases = async (newCase: Case) => {
    await joinCase(newCase);
    router.back();
    router.replace('/AllCases');
  };

  const getCase = async (uid: CaseUid) => {
    const caseData = await getCaseById(uid);
    setCaseData(caseData);
  };

  useEffect(() => {
    if (caseUid !== undefined) {
      getCase(caseUid);
    }
  }, []);

  return (
    <View style={device.safeArea}>
      {caseData === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <CaseSummaryContent {...caseData} />
          <View style={styles.linkContainer}>
            <ButtonWhite
              onPress={() => router.back()}
              $halfWidth
              $centeredContent
            >
              <View style={input.groupButtonContent}>
                <CancelIcon />
                <Text style={fonts.blackButton}>Cancel</Text>
              </View>
            </ButtonWhite>

            <ButtonBlack
              onPress={() => addToCases(caseData)}
              $halfWidth
              $centeredContent
            >
              <View style={input.groupButtonContent}>
                <AddCaseIcon />
                <Text style={fonts.whiteButton}>Add Case</Text>
              </View>
            </ButtonBlack>
          </View>
        </>
      )}
    </View>
  );
}
