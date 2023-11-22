import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import RightCaret from '../../../assets/right-caret.svg';
import { fetchFeaturedForm } from '../../app/(BottomTabNavigation)/AllCases/Forms/utils';
import { Case, Form } from '../../types/types';
import FormListItem from '../FormListItem/FormListItem';

export default function FormsCard(caseData: Case) {
  const [featuredForm, setFeaturedForm] = useState<Form>();

  useEffect(() => {
    const getForm = async () => {
      const formData = await fetchFeaturedForm(
        caseData.id,
        caseData.featuredFormName,
      );
      if (formData) {
        setFeaturedForm(formData);
      }
    };
    getForm();
  });

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Documents</Text>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: `/AllCases/Forms`,
              params: {
                ...caseData,
              },
            })
          }
        >
          <View style={styles.formRouteButton}>
            <Text>View all ({caseData.formCount})</Text>
            <RightCaret />
          </View>
        </TouchableOpacity>
      </View>
      {featuredForm === undefined ? null : (
        <View style={styles.bottomContainer}>
          <FormListItem {...featuredForm} />
        </View>
      )}
    </View>
  );
}
