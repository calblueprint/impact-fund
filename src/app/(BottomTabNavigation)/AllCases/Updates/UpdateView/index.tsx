import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';
import { getUpdateById } from '../../../../../supabase/queries/updates';
import { Update, UpdateUid } from '../../../../../types/types';
import { formatDate } from '../../utils';

export default function UpdateView() {
  const { updateUid, lawFirm } = useLocalSearchParams<{
    updateUid: UpdateUid;
    lawFirm: string;
  }>();

  const [update, setUpdate] = useState<Update>();
  async function getUpdate(uid: UpdateUid) {
    const update = await getUpdateById(uid);
    setUpdate(update);
  }

  useEffect(() => {
    if (updateUid !== undefined) {
      getUpdate(updateUid);
    }
  }, []);

  return (
    <View style={styles.container}>
      {update && (
        <>
          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.title}>{update.title}</Text>
            <View style={styles.inLineSubInfo}>
              <Text>{lawFirm}</Text>
              <Text> • {formatDate(update.date)}</Text>
            </View>
            {/* <Text>{update.blurb}</Text> */}
            <Text>{update.summary}</Text>
          </ScrollView>
        </>
      )}
    </View>
  );
}
