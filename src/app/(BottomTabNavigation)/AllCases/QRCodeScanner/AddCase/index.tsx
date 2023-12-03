import { router, useLocalSearchParams } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';

import styles from './styles';
import { CaseContext } from '../../../../../context/CaseContext';
import { getCaseById, uploadCase } from '../../../../../supabase/queries/cases';
import { CaseUid, Case } from '../../../../../types/types';
import { formatDate } from '../../utils';

function AddCase() {
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
    <View style={{ height: '100%' }}>
      {caseData === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView
          style={styles.container}
          contentContainerStyle={{
            justifyContent: 'flex-start',
          }}
          showsVerticalScrollIndicator={false}
        >
          <Image style={styles.image} source={{ uri: caseData.imageUrl }} />
          <Text style={styles.title}>{caseData.title}</Text>
          <View style={styles.dateAndFirm}>
            <Text style={styles.dateAndFirmText}>
              {formatDate(caseData.date)} • {caseData.lawFirm}
            </Text>
          </View>
          <Text style={styles.blurb}>{caseData.summary}</Text>
          <TouchableOpacity
            onPress={() => addToCases(caseData)}
            style={styles.button}
          >
            <Text>ADD TO CASES</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.back()} style={styles.button}>
            <Text>CANCEL</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
}

export default AddCase;
