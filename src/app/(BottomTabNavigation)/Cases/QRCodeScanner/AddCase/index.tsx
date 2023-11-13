import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import {
  containsDuplicateCase,
  getImageUrl,
  uploadCase,
} from '../../../../../supabase/queries/cases';
import { CaseUid } from '../../../../../types/types';

function AddCase() {
  const { id, title, summary } = useLocalSearchParams() as {
    id: CaseUid;
    title: string;
    summary: string;
  };
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [image, setImage] = useState<string>();
  console.log(loading);

  useEffect(() => {
    const validateCaseUniqueness = async () => {
      const duplicate = await containsDuplicateCase(id);
      if (duplicate) {
        console.log('DUPLICATES NOT ALLOWED!');
        router.back();
      }
      const bucketImage = await getImageUrl(id);
      setImage(bucketImage);
      setLoading(false);
    };
    validateCaseUniqueness();
  }, []);

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
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.blurb}>{summary}</Text>
      <TouchableOpacity onPress={addToCases} style={styles.button}>
        <Text>ADD TO CASES</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>CANCEL</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddCase;
