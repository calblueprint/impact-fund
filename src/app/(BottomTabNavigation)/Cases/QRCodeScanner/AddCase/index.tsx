import { router, useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';

import styles from './styles';
import { getImageUrl, uploadCase } from '../../../../../supabase/queries/cases';
import { CasePartial } from '../../../../../types/types';
import { formatDate } from '../../utils';

function AddCase() {
  const { id, title, date, lawFirm, summary } =
    useLocalSearchParams() as unknown as CasePartial;
  const [loading, setLoading] = useState<boolean>(true);
  const [image, setImage] = useState<string>();

  useEffect(() => {
    const waitForImage = async () => {
      const bucketImage = await getImageUrl(id);
      setImage(bucketImage);
      setLoading(false);
    };
    waitForImage();
  });

  const addToCases = async () => {
    uploadCase(id);
    router.push('/Cases');
  };
  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>LOADING... </Text>
      </View>
    );
  }
  return (
    <View style={{ height: '100%' }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: 'flex-start',
        }}
      >
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.dateAndFirm}>
          <Text style={styles.dateAndFirmText}>
            {formatDate(date)} • {lawFirm}
          </Text>
        </View>
        <Text style={styles.blurb}>{summary}</Text>
        <TouchableOpacity onPress={addToCases} style={styles.button}>
          <Text>ADD TO CASES</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <Text>CANCEL</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default AddCase;
