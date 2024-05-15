import { useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import styles from './styles';
import CaseStatusBar from '../../../../Components/CaseStatusBar/CaseStatusBar';
import UpdateItem from '../../../../Components/UpdateItem/UpdateItem';
import { fonts } from '../../../../styles/fonts';
import { getCaseById } from '../../../../supabase/queries/cases';
import { fetchAllUpdates } from '../../../../supabase/queries/updates';
import { Update, CaseUid, Case } from '../../../../types/types';

export default function UpdatesScreen() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [caseData, setCaseData] = useState<Case>();
  const [updates, setUpdates] = useState<Update[]>([]);

  async function getUpdatesOnLoad(uid: CaseUid) {
    fetchAllUpdates(uid).then(data => {
      setUpdates(data);
    });
  }

  async function getCaseData(uid: CaseUid) {
    const caseData = await getCaseById(uid);
    setCaseData(caseData);
  }

  useEffect(() => {
    if (caseUid !== undefined) {
      getCaseData(caseUid);
      getUpdatesOnLoad(caseUid);
      setIsLoading(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      {isLoading || caseData === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.contentContainer}>
          <FlatList
            data={updates}
            keyExtractor={item => item.updateUid}
            contentContainerStyle={styles.innerScroll}
            ItemSeparatorComponent={() => <View style={styles.lineStyle} />}
            renderItem={({ item }) => <UpdateItem {...item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.headerContainer}>
                <Text style={fonts.tabHeading}>Case Updates</Text>
                <CaseStatusBar status={caseData.caseStatus} />
              </View>
            }
            ListEmptyComponent={
              <Text style={fonts.body}>
                There are no updates associated with this case.
              </Text>
            }
          />
        </View>
      )}
    </View>
  );
}
