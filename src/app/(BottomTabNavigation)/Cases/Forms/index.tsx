import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';
import { fetchFormObjects } from './utils';
import FormListItem from '../../../../Components/FormListItem/FormListItem';
import { CaseUid, Form } from '../../../../types/types';

export default function FormsScreen() {
  const id: CaseUid = 'asdfasdf';
  // const pdfs = await fetchPdfObjects(id);

  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [noCasesExist, setNoCasesExist] = useState<boolean>(false);
  const [forms, setForms] = useState<Form[]>([]);

  // fetch on load can be reused if user wants to reload
  // would require changing function argument to UserUid state
  async function fetchFormsOnLoad() {
    fetchFormObjects(id).then(data => {
      // data fetched and ready for render
      // setIsLoading(false);
      if (data.length > 0) {
        setForms(data);
      }
      // } else {
      //   setNoCasesExist(true);
      // }
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
