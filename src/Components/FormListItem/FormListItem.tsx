import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import PdfIcon from '../../../assets/pdf.svg';
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
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <PdfIcon />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{formData.title}</Text>
          <Text style={styles.dateText}>{String(formData.date)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
