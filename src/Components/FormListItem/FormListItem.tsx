import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Form } from '../../types/types';

export default function FormListItem(formData: Form) {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `Cases/Forms/FormView`,
          params: {
            id: formData.pdfLink,
            title: formData.title,
            date: formData.date,
            pdfLink: formData.pdfLink,
          },
        })
      }
    >
      <View>
        <Text>View PDF</Text>
      </View>
    </TouchableOpacity>
  );
}
