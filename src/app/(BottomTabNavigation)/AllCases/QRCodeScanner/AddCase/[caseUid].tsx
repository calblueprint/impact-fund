import { router, useLocalSearchParams } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import AddCaseIcon from '../../../../../../assets/add-case-icon.svg';
import CancelIcon from '../../../../../../assets/cancel-x-icon.svg';
import CaseSummaryContent from '../../../../../Components/CaseSummaryContent/CaseSummaryContent';
import { CaseContext } from '../../../../../context/CaseContext';
import {
  getCaseById,
  updateCaseActivity,
  uploadCase,
} from '../../../../../supabase/queries/cases';
import { CaseUid, Case } from '../../../../../types/types';

export default function AddCase() {
  const { allCases, updateCases } = useContext(CaseContext);
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const [caseData, setCaseData] = useState<Case>();

  const addToCases = async (newCase: Case) => {
    await uploadCase(newCase.id);
    updateCases([...allCases, newCase]);
    router.push('/AllCases');
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
    <View style={styles.container}>
      {caseData === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <CaseSummaryContent {...caseData} />
          <View style={styles.linkContainer}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={[styles.buttonBase, styles.cancelButton]}
            >
              <CancelIcon />
              <Text style={[styles.buttonText, styles.blackText]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => addToCases(caseData)}
              style={[styles.buttonBase, styles.addCaseButton]}
            >
              <AddCaseIcon />
              <Text style={[styles.buttonText, styles.whiteText]}>
                Add Case
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
