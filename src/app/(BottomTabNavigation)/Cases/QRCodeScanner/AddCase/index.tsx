import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import supabase from '../../../../../../lib/supabase';
import styles from './styles';

function AddCase() {
  const local = useLocalSearchParams();
  console.log(local);
  const { caseId } = local;
  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase
        .from('Cases')
        .select()
        .filter('id', 'is', caseId);
      // .eq('id', caseId);
    };
    // getData();
  }, []);

  // error handling
  // if (error) {
  //   console.log('UH OH!');
  //   router.back();
  // }

  // console.log(data);

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
