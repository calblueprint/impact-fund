import CheckBox from 'expo-checkbox';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native';

import Requirement from './Requirement';
// import CustomCheckbox from './checkbox';
import styles from './styles';
import Check from '../../../../../assets/check-circle.svg';
//import Ch from '../../../../../assets/checkbox.svg';
import Error from '../../../../../assets/exclamation.svg';
// import LineBig from '../../../../../assets/line-big.svg';
import LineHuge from '../../../../../assets/line-huge.svg';
// import LineSmall from '../../../../../assets/line-small.svg';
//import Rectangle from '../../../../../assets/rectangle.svg';
import Ex from '../../../../../assets/x.svg';
import {
  updateCaseStatus,
  getCaseById,
} from '../../../../supabase/queries/cases';
import { getReqsById } from '../../../../supabase/queries/eligibility';
import {
  Case,
  CaseUid,
  Eligibility,
  EligibilityRequirement,
} from '../../../../types/types';

export default function EligibilityForm() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const [caseData, setCaseData] = useState<Case>();
  const [eligReqs, setEligReqs] = useState<EligibilityRequirement[]>([]);
  const [numChecked, setNumChecked] = useState(0);

  const caseHeader = () => (
    <>
      {!caseData ? (
        <Text>Loading!!!</Text>
      ) : (
        <View style={styles.headerContainer}>
          <Image style={styles.image} source={{ uri: caseData.imageUrl }} />
          <Text style={styles.titleText}>{caseData.title}</Text>
          <View style={styles.infoRow}>
            <Error />
            <Text style={styles.bodyText}>
              You must meet every requirement to be eligible for this
              class-action.
            </Text>
          </View>
          {/* <LineBig style={{ marginHorizontal: 15 }} /> */}
        </View>
      )}
    </>
  );

  const caseFooter = () => (
    <View style={styles.footerContainer}>
      <LineHuge />
      <Text style={styles.info}>Do you meet the following requirements?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonTop]}
          onPress={() => updateEligibility(Eligibility.INELIGIBLE)}
        >
          <Ex />
          <Text>No, I don't</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={numChecked !== eligReqs.length}
          style={
            numChecked === eligReqs.length
              ? styles.buttonBottom
              : styles.buttonBottomGray
          }
          onPress={() => updateEligibility(Eligibility.ELIGIBLE)}
        >
          <Check />
          <Text style={styles.buttonBottomText}>Yes, I do</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // const countChecked = () => {
  //   let checkedCount = 0;
  //   eligReqs.forEach(requirement => {
  //     if (requirement.checked) {
  //       checkedCount++;
  //     }
  //   });
  //   console.log(checkedCount);
  //   console.log(eligReqs);
  //   return checkedCount;
  // };

  async function fetchEligReqs() {
    if (caseUid) {
      const reqs = await getReqsById(caseUid);
      setEligReqs(reqs);
    }
  }

  async function fetchCaseData() {
    if (caseUid) {
      const caseData = await getCaseById(caseUid);
      setCaseData(caseData);
    }
  }

  useEffect(() => {
    fetchCaseData();
    fetchEligReqs();
  }, []);

  const updateEligibility = async (status: Eligibility) => {
    if (caseUid !== undefined) {
      await updateCaseStatus(caseUid, status);
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          contentContainerStyle={styles.flatty}
          ListHeaderComponent={caseHeader}
          ListFooterComponent={caseFooter}
          showsVerticalScrollIndicator={false}
          // ItemSeparatorComponent={() => <View style={styles.lineStyle} />}
          data={eligReqs}
          renderItem={({ item }) => <Requirement {...item} />}
          keyExtractor={item => item.eligUid}
        />
      </View>
    </View>
  );
}
