import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';
import { fetchPdfObjects } from './utils';
import FormListItem from '../../../../Components/FormListItem/FormListItem';
import { CaseUid } from '../../../../types/types';

export default function FormsScreen() {
  const id: CaseUid = 'asdfasdf';
  const pdfs = fetchPdfObjects(id);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Documents</Text>
      </View>
      <View style={styles.formsContainer}>
        <FlatList
          data={pdfs}
          renderItem={({ item }) => <FormListItem {...item} />}
        />
      </View>
    </View>
  );
}
