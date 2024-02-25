import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';
import LineBig from '../../../../../assets/line-big.svg';
import LineSmall from '../../../../../assets/line-small.svg';
import RightArrow from '../../../../../assets/right-arrow.svg';
import Checkbox from '../../../../Components/Checkbox/checkbox';
import {
  updateCaseStatus,
  getCaseById,
} from '../../../../supabase/queries/cases';
import { Case, CaseUid, Eligibility } from '../../../../types/types';

export default function EligibilityForm() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const [caseData, setCaseData] = useState<Case>();

  useEffect(() => {
    async function fetchCaseData() {
      if (caseUid) {
        const caseData = await getCaseById(caseUid);
        setCaseData(caseData);
      }
    }
    fetchCaseData();
  }, [caseUid]);

  const updateEligibility = async (status: Eligibility) => {
    if (caseUid !== undefined) {
      await updateCaseStatus(caseUid, status);
      router.replace({
        pathname: `/AllCases/CaseScreen/${caseUid}`,
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      {caseData && (
        <>
          <Image style={styles.image} source={{ uri: caseData.imageUrl }} />
          <Text style={styles.title}>{caseData.title}</Text>
        </>
      )}

      <View style={styles.textContainer}>
        <View style={styles.insideContainer}>
          <Text style={styles.info}>
            You must meet every requirement to be eligible for this
            class-action.
          </Text>
          <LineBig />
          <Text style={styles.reqs}>
            <Checkbox />
            This is the first requirement that you should meet to file a claim
            <LineSmall />
          </Text>
          <Text style={styles.reqs}>
            <Checkbox />
            This is the next requirement that you should meet to file a claim
            <LineSmall />
          </Text>
          <Text style={styles.reqs}>
            <Checkbox />
            This is the last requirement that you should meet to file a claim
            <LineSmall />
          </Text>
          <Text style={styles.reqs}>
            <Checkbox />
            This is the last requirement that you should meet to file a claim
            <LineSmall />
          </Text>
          <Text style={styles.reqs}>
            <Checkbox />
            This is the last requirement that you should meet to file a claim
            <LineSmall />
          </Text>
          <Text>Do you meet the following requirements?</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonTop]}
          onPress={() => updateEligibility(Eligibility.ELIGIBLE)}
        >
          <Text>Yes, I do</Text>
          <RightArrow />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonBottom]}
          onPress={() => updateEligibility(Eligibility.INELIGIBLE)}
        >
          <Text style={styles.buttonBottomText}>No, I don't</Text>
          <Text style={styles.buttonBottomText}>X</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
