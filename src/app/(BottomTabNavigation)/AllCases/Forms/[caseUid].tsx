import { useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';
import { getAllForms } from './utils';
import ExternalSiteLink from '../../../../Components/ExternalSiteLink/ExternalSiteLink';
import FormListItem from '../../../../Components/FormListItem/FormListItem';
import LoadingComponent from '../../../../Components/LoadingComponent/LoadingComponent';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { Form, CaseUid } from '../../../../types/types';

export default function FormsScreen() {
  const { caseUid, caseSite } = useLocalSearchParams<{
    caseUid: CaseUid;
    caseSite?: string;
  }>();

  const [forms, setForms] = useState<Form[]>([]);

  async function getFormsOnLoad(uid: CaseUid) {
    getAllForms(uid).then(data => {
      if (data.length > 0) {
        setForms(data);
      }
    });
  }

  useEffect(() => {
    if (caseUid !== undefined) {
      getFormsOnLoad(caseUid);
    }
  }, []);

  return (
    <View style={device.safeArea}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={fonts.tabHeading}>Documents</Text>
        </View>
        {forms.length === 0 ? (
          <LoadingComponent />
        ) : (
          <View style={styles.formsContainer}>
            <FlatList
              data={forms}
              keyExtractor={item => item.formUid}
              ItemSeparatorComponent={() => <View style={styles.lineStyle} />}
              renderItem={({ item }) => <FormListItem {...item} />}
            />
          </View>
        )}
      </View>
      {caseSite === undefined ? null : (
        <View style={styles.linkContainer}>
          <ExternalSiteLink text="View all case documents" url={caseSite} />
        </View>
      )}
    </View>
  );
}
