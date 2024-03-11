import { useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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
    <View>
      <View>
        <Text>Case Updates</Text>
      </View>
      <View>
        <FlatList
          data={updates}
          keyExtractor={item => item.updateUid}
          renderItem={({ item }) => <UpdateItem {...item} />}
        />
      </View>
    </View>
  );
}
