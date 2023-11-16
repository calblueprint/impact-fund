import { useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';
import { fetchFormObjects } from './utils';
import ExternalSiteLink from '../../../../Components/ExternalSiteLink/ExternalSiteLink';
import FormListItem from '../../../../Components/FormListItem/FormListItem';
import { Form, Case } from '../../../../types/types';

export default function FormsScreen() {
  const caseData = useLocalSearchParams() as unknown as Case;

  const [forms, setForms] = useState<Form[]>([]);

  async function fetchFormsOnLoad() {
    fetchFormObjects(caseData.id).then(data => {
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
      <View style={styles.contentContainer}>
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
      <View style={styles.linkContainer}>
        <ExternalSiteLink
          text="View all case documents"
          url={caseData.caseSite}
        />
      </View>
    </View>
  );
}
