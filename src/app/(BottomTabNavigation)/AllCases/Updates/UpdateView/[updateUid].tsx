import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';
import { getUpdateById } from '../../../../../supabase/queries/updates';
import { Update, UpdateUid } from '../../../../../types/types';
import { formatDate } from '../../utils';

export default function UpdateView() {
  const { updateUid } = useLocalSearchParams<{
    updateUid: UpdateUid;
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
          <ScrollView
            style={styles.outerScroll}
            contentContainerStyle={styles.innerScroll}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>{update.title}</Text>
            <View style={styles.inLineSubInfo}>
              <Text>{update.lawFirm}</Text>
              <Text> • {formatDate(update.date)}</Text>
            </View>
            <Text>{update.summary}</Text>
          </ScrollView>
        </>
      )}
    </View>
  );
}
