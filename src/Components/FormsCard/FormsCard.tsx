import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import RightCaret from '../../../assets/right-caret.svg';
import { getFeaturedForm } from '../../app/(BottomTabNavigation)/AllCases/Forms/utils';
import globalStyles from '../../styles/global';
import { Case, Form } from '../../types/types';
import FormListItem from '../FormListItem/FormListItem';

export default function FormsCard(caseData: Case) {
  const [featuredForm, setFeaturedForm] = useState<Form>();

  const getForm = async () => {
    const formData = await getFeaturedForm(
      caseData.id,
      caseData.featuredFormName,
    );
    if (formData) {
      setFeaturedForm(formData);
    }
  };

  useEffect(() => {
    if (caseData.formCount > 0) {
      getForm();
    }
  }, []);

  return (
    <View style={[styles.container, globalStyles.shadowBorder]}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Documents</Text>
        <TouchableOpacity
          disabled={Number(caseData.formCount) === 0}
          onPress={() =>
            router.push({
              pathname: `/AllCases/Forms/${caseData.id}?caseSite=${caseData.caseSite}`,
            })
          }
        >
          <View style={styles.formRouteButton}>
            <Text style={styles.bodyText}>View all ({caseData.formCount})</Text>
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
