import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';

// import { CaseFormsProps } from '../../../../types/types';

export default function FormsScreen() {
  // const caseData = useLocalSearchParams() as unknown as CaseFormsProps;
  const pdfs = [
    'https://www.africau.edu/images/default/sample.pdf',
    'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <FlatList
        data={pdfs}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: `Cases/Forms/FormView`,
                params: {
                  pdfLink: item,
                },
              })
            }
          >
            <Text>View PDF</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
