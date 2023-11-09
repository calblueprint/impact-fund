import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import {
  containsDuplicateCase,
  uploadCase,
} from '../../../../../supabase/queries/cases';
import { CaseUid } from '../../../../../types/types';

function AddCase() {
  const { id, title, image, summary } = useLocalSearchParams() as {
    id: CaseUid;
    title: string;
    image: string;
    summary: string;
  };
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const validateCaseUniqueness = async () => {
      const duplicate = await containsDuplicateCase(id);
      if (duplicate) {
        console.log('DUPLICATES NOT ALLOWED!');
        router.back();
      }
    };
    validateCaseUniqueness();
    setLoading(false);
  }, []);

  const addToCases = async () => {
    uploadCase(id);
    router.push('/Cases');
  };
  if (loading) {
    return (
      <View>
        <Text>LOADING... LOL</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: image }} />
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
