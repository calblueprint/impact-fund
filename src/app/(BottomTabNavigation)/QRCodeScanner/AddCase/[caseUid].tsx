import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import styles from './styles';
import AddCaseIcon from '../../../../../assets/add-case-icon.svg';
import CancelIcon from '../../../../../assets/cancel-x-icon.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../../Components/AuthButton/AuthButton';
import CaseSummaryContent from '../../../../Components/CaseSummaryContent/CaseSummaryContent';
import LoadingComponent from '../../../../Components/ScreenLoadingComponent/ScreenLoadingComponent';
import { useCaseContext } from '../../../../context/CaseContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';
import { getCaseById } from '../../../../supabase/queries/cases';
import { CaseUid, Case } from '../../../../types/types';

export default function AddCase() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const { joinCase } = useCaseContext();
  const [caseData, setCaseData] = useState<Case>();
  const [queryLoading, setQueryLoading] = useState<boolean>(false);

  const getCase = async (uid: CaseUid) => {
    const caseData = await getCaseById(uid);
    setCaseData(caseData);
  };

  const addToCases = async (newCase: Case) => {
    setQueryLoading(true);
    await joinCase(newCase);
    router.back();
    router.replace('/AllCases');
    setQueryLoading(false);
  };

  useEffect(() => {
    if (caseUid !== undefined) {
      getCase(caseUid);
    }
  }, []);

  return (
    <View style={device.safeArea}>
      {caseData === undefined ? (
        <LoadingComponent />
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
              disabled={queryLoading}
              $halfWidth
              $centeredContent
            >
              <View style={input.groupButtonContent}>
                {queryLoading ? <ActivityIndicator /> : <AddCaseIcon />}
                <Text style={fonts.whiteButton}>Add Case</Text>
              </View>
            </ButtonBlack>
          </View>
        </>
      )}
    </View>
  );
}
