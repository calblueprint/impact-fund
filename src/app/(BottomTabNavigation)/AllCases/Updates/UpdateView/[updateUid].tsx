import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';
import NotificationBell from '../../../../../../assets/red-notification-bell.svg';
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
      {update === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <ScrollView
            style={styles.outerScroll}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.innerScroll}>
              <View style={styles.titleContainer}>
                <NotificationBell />
                <View style={styles.headerText}>
                  <Text style={styles.categoryText}>{update.category}</Text>
                  <Text style={styles.titleText}>{update.title}</Text>
                </View>
              </View>
              <View style={styles.inLineSubInfo}>
                <Text style={[styles.subText, styles.lawFirmText]}>
                  {update.lawFirm}
                </Text>
                <Text style={[styles.subText, styles.dateText]}>
                  {' '}
                  • {formatDate(update.date)}
                </Text>
              </View>
              <Text style={styles.bodyText}>{update.summary}</Text>
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
}
