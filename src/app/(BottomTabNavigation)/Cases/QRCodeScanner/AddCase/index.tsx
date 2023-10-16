import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { getCase, uploadCase } from '../../../../../supabase/queries/case';
import styles from './styles';

enum caseStatus {
  NotStarted,
  InProgress,
  Settled,
  Cancelled,
}

export interface Case {
  id: number;
  approved: boolean;
  title: string;
  summary: string;
  image: string;
  caseStatus: caseStatus;
}

function AddCase() {
  const local = useLocalSearchParams();
  const { caseId } = local;
  const router = useRouter();

  const [dataImage, setDataImage] = useState('');
  const [dataTitle, setDataTitle] = useState('');
  const [dataSummary, setDataSummary] = useState('');

  const parseData = (data: any) => {
    const myData = {
      ...(data[0] as Partial<Case>),
    };
    return myData as Case;
  };
  useEffect(() => {
    const getData = async () => {
      const { data, error } = await getCase(caseId);
      if (error) {
        console.log('error');
      }

      const myData = parseData(data);
      const { image, title, summary } = myData;

      setDataImage(image);
      setDataTitle(title);
      setDataSummary(summary);
      console.log(data);
    };
    getData();
  }, []);

  const addToCases = async () => {
    console.log('CLICKING BUTTON');
    const { error } = uploadCase(caseId);
    if (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dataTitle}</Text>
      <Image style={styles.image} source={{ uri: dataImage }} />
      <Text style={styles.blurb}>{dataSummary}</Text>
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
