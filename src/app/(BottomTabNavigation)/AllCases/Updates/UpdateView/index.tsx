import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { getUpdateById } from '../../../../../supabase/queries/updates';
import { Update, UpdateUid, updateInstance } from '../../../../../types/types';
import { formatDate } from '../../utils';

export default function UpdateView() {
  const { updateUid } = useLocalSearchParams<{ updateUid: UpdateUid }>();

  const [update, setUpdate] = useState<Update>(updateInstance); // is there a better way to set this bc if no default value then errors w "update may be undefined"

  async function getUpdate(uid: UpdateUid) {
    console.log('getting update');
    const update = await getUpdateById(uid);
    setUpdate(update);
  }

  useEffect(() => {
    console.log(updateUid);
    if (updateUid !== undefined) {
      getUpdate(updateUid);
    }
  }, []);

  console.log(update);

  return (
    <View>
      <Text>{update.title}</Text>
      <Text>{formatDate(update.date)}</Text>
      <Text>{update.blurb}</Text>
      <Text>{update.summary}</Text>
    </View>
  );
}
