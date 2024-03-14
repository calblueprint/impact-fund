import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { formatDate } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { getCaseById } from '../../supabase/queries/cases';
import { CaseUid, Update } from '../../types/types';

export default function UpdateItem(updateData: Update) {
  const [lawFirm, setLawFirm] = useState<string>();

  async function getLawFirm(uid: CaseUid) {
    getCaseById(uid).then(data => setLawFirm(data.lawFirm));
  }

  useEffect(() => {
    getLawFirm(updateData.caseUid);
  }, []);

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `/AllCases/Updates/UpdateView`,
          params: {
            updateUid: updateData.updateUid,
          },
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{updateData.title}</Text>
          <Text style={styles.dateText}>{formatDate(updateData.date)}</Text>
          <Text>{lawFirm}</Text>
          <Text>{updateData.blurb}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
