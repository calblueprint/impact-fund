import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';
import NotificationBell from '../../../../../../assets/red-notification-bell.svg';
import LoadingComponent from '../../../../../Components/ScreenLoadingComponent/ScreenLoadingComponent';
import { fonts } from '../../../../../styles/fonts';
import { device, shawdowStyles } from '../../../../../styles/global';
import { fullStopErrorHandler } from '../../../../../supabase/queries/auth';
import { getUpdateById } from '../../../../../supabase/queries/updates';
import { Update, UpdateUid } from '../../../../../types/types';
import { formatDate } from '../../utils';

export default function UpdateView() {
  const { updateUid } = useLocalSearchParams<{
    updateUid: UpdateUid;
  }>();
  const [update, setUpdate] = useState<Update>();

  async function getUpdate(uid: UpdateUid) {
    await getUpdateById(uid)
      .then(update => setUpdate(update))
      .catch(response => fullStopErrorHandler(response));
  }

  useEffect(() => {
    if (updateUid !== undefined) {
      getUpdate(updateUid);
    }
  }, []);

  return (
    <View style={device.safeArea}>
      {update === undefined ? (
        <LoadingComponent />
      ) : (
        <>
          <ScrollView
            style={styles.outerScroll}
            showsVerticalScrollIndicator={false}
          >
            <View style={[shawdowStyles.shadowBorder, styles.innerScroll]}>
              <View style={styles.titleContainer}>
                <NotificationBell />
                <View style={styles.headerText}>
                  <Text style={styles.categoryText}>
                    {update.category.toUpperCase()}
                  </Text>
                  <Text style={fonts.condensedHeadline}>{update.title}</Text>
                </View>
              </View>
              <View style={styles.inLineSubInfo}>
                <Text style={[styles.subText, styles.lawFirmText]}>
                  {update.sender}
                </Text>
                <Text style={[styles.subText, styles.dateText]}>
                  {' '}
                  • {formatDate(update.date)}
                </Text>
              </View>
              <Text style={[fonts.body, styles.bodyText]}>
                {update.description}
              </Text>
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
}
