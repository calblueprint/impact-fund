import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import { fetchPdfObjects } from './utils';
import FormListItem from '../../../../Components/FormListItem/FormListItem';
import { CaseUid } from '../../../../types/types';

export default function FormsScreen() {
  const id: CaseUid = 'asdfasdf';
  const pdfs = fetchPdfObjects(id);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <FlatList
        data={pdfs}
        renderItem={({ item }) => <FormListItem {...item} />}
      />
    </View>
  );
}
