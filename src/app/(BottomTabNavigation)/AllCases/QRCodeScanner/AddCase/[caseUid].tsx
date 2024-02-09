import { router, useLocalSearchParams } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import CaseSummaryContent from '../../../../../Components/CaseSummaryContent/CaseSummaryContent';
import StyledButton from '../../../../../Components/StyledButton/StyledButton';
import { CaseContext } from '../../../../../context/CaseContext';
import { getCaseById, uploadCase } from '../../../../../supabase/queries/cases';
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
          <CaseSummaryContent />
          <View style={styles.linkContainer}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={[styles.buttonBase, styles.cancelButton]}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => addToCases(caseData)}
              style={[styles.buttonBase, styles.addCaseButton]}
            >
              <Text>Add Case</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
