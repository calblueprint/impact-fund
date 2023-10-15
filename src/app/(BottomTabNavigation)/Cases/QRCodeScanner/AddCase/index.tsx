import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import supabase from '../../../../../../lib/supabase';
import styles from './styles';

function AddCase() {
  const local = useLocalSearchParams();
  const { caseId } = local;
  const router = useRouter();

  console.log('CASE ID IS:', caseId);
  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase
        .from('Cases')
        .select()
        .eq('id', caseId);

      if (error) {
        console.log(error);
        router.back();
      }

      console.log(data);
    };
    getData();
  }, []);

  const dummyData = {
    image:
      'https://lastfm.freetls.fastly.net/i/u/ar0/a264ce4e962048cac811215a384ecba7.jpg',
    title: 'HELLO WORLD',
    summary:
      'This is a little dumb blurb. Will be replaced once I do supabase fetches later yadyadyadyadaydaydadayddyahemorraghagedookiefart',
  };
  const addToCases = () => {
    // const { data, error } = await supabase.
    console.log('LOL!');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dummyData.title}</Text>
      <Image style={styles.image} source={{ uri: dummyData.image }} />
      <Text style={styles.blurb}>{dummyData.summary}</Text>
      <TouchableOpacity onPress={addToCases} style={styles.button}>
        <Text>ADD TO CASES {caseId}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>CANCEL</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddCase;
