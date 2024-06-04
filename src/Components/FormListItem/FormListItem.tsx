import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import PdfIcon from '../../../assets/pdf.svg';
import { formatDate } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { fonts } from '../../styles/fonts';
import { Form } from '../../types/types';

export default function FormListItem(formData: Form) {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `/AllCases/Forms/FormView`,
          params: {
            formUrl: formData.formUrl,
          },
        })
      }
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <PdfIcon />
      </View>
      <View style={styles.textContainer}>
        <Text style={fonts.body}>{formData.title}</Text>
        <Text style={fonts.greyVerySmall}>{formatDate(formData.date)}</Text>
      </View>
    </TouchableOpacity>
  );
}
