import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';
import { fetchFormObjects } from './utils';
import FormListItem from '../../../../Components/FormListItem/FormListItem';
import { CaseUid, Form } from '../../../../types/types';

export default function FormsScreen() {
  const id: CaseUid = 'juul-case';

  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const [forms, setForms] = useState<Form[]>([]);

  async function fetchFormsOnLoad() {
    fetchFormObjects(id).then(data => {
      // setIsLoading(false);
      if (data.length > 0) {
        setForms(data);
      }
    });
  }

  useEffect(() => {
    fetchFormsOnLoad();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Documents</Text>
      </View>
      <View style={styles.formsContainer}>
        <FlatList
          data={forms}
          renderItem={({ item }) => <FormListItem {...item} />}
        />
      </View>
    </View>
  );
}
