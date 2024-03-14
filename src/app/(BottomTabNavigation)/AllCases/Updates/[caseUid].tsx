import { useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import styles from './styles';
import UpdateItem from '../../../../Components/UpdateItem/UpdateItem';
import { fetchAllUpdates } from '../../../../supabase/queries/updates';
import { Update, CaseUid } from '../../../../types/types';

export default function UpdatesScreen() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();

  const [updates, setUpdates] = useState<Update[]>([]);

  async function getUpdatesOnLoad(uid: CaseUid) {
    fetchAllUpdates(uid).then(data => {
      if (data.length > 0) {
        setUpdates(data);
      }
    });
  }

  useEffect(() => {
    if (caseUid !== undefined) {
      getUpdatesOnLoad(caseUid);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Case Updates</Text>
        </View>
        <View style={styles.updatesContainer}>
          <FlatList
            data={updates}
            keyExtractor={item => item.updateUid}
            ItemSeparatorComponent={() => <View style={styles.lineStyle} />}
            renderItem={({ item }) => <UpdateItem {...item} />}
          />
        </View>
      </View>
    </View>
  );
}
