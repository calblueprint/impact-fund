import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import RightCaret from '../../../assets/right-caret.svg';
import { Case, Form } from '../../types/types';
import FormListItem from '../FormListItem/FormListItem';

const exampleForm: Form = {
  id: '1',
  title: 'Long Form Notice',
  date: new Date('10-10-2023'),
  filename: 'example.pdf',
  formUrl:
    'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://kvfpmjezholwvgdmabhr.supabase.co/storage/v1/object/public/caseFiles/a366a017-2834-4365-83f1-91605ba5c80a/altria-long-form-notice.pdf?t=2023-11-16T06%3A32%3A19.610Z',
};

export default function FormsCard(caseData: Case) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Documents</Text>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: `/Cases/Forms`,
              params: {
                ...caseData,
              },
            })
          }
        >
          <View style={styles.formRouteButton}>
            <Text>View all ({15})</Text>
            <RightCaret />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <FormListItem {...exampleForm} />
        {/* <FormListItem {...exampleForm} /> */}
      </View>
    </View>
  );
}
