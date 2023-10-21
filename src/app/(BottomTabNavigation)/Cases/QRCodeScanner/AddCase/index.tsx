import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { getCase, uploadCase } from '../../../../../supabase/queries/case';
import { CaseUid } from '../../../../../types/types';
import styles from './styles';

function AddCase() {
  const { id, title, summary, image } = useLocalSearchParams<{
    id: CaseUid;
    title: string;
    summary: string;
    image: string;
  }>();
  console.log(id, title, summary, image);
  const router = useRouter();

  const addToCases = async () => {
    uploadCase(id);
    router.push('/Cases');
  };
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
