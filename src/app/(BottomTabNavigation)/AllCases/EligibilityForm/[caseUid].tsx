import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native';

import Checkbox from './checkbox';
import styles from './styles';
import Check from '../../../../../assets/check-circle.svg';
//import Ch from '../../../../../assets/checkbox.svg';
import Error from '../../../../../assets/exclamation.svg';
import LineBig from '../../../../../assets/line-big.svg';
import LineSmall from '../../../../../assets/line-small.svg';
//import Rectangle from '../../../../../assets/rectangle.svg';
import Ex from '../../../../../assets/x.svg';
import {
  updateCaseStatus,
  getCaseById,
} from '../../../../supabase/queries/cases';
import { getReqsById } from '../../../../supabase/queries/eligibility';
import { Case, CaseUid, Eligibility } from '../../../../types/types';

export default function EligibilityForm() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const [caseData, setCaseData] = useState<Case>();
  const [eligReqs, setEligReqs] = useState<string[]>();

  const caseHeader = () => (
    <View>
      {!caseData ? (
        <Text style={{ fontSize: 75 }}>Loading!!!</Text>
      ) : (
        <>
          <Image style={styles.image} source={{ uri: caseData.imageUrl }} />
          <Text style={styles.title}>{caseData.title}</Text>
        </>
      )}

      <View style={styles.infoRow}>
        <Error style={{ marginHorizontal: 10 }} />
        <Text>
          You must meet every requirement to be eligible for this class-action.
        </Text>
      </View>
      <LineBig />
    </View>
  );

  const Item = (item: any) => (
    <View>
      <View style={styles.list}>
        <Checkbox />
        <Text>{item.requirements}</Text>
      </View>
      <LineSmall style={{ justifyContent: 'flex-end' }} />
    </View>
  );

  const caseFooter = () => (
    <View>
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
          //disabled={numChecks !== DATA.length}
          style={
            styles.buttonBottomGray
            // numChecks === DATA.length
            //   ? styles.buttonBottom:
          }
          onPress={() => updateEligibility(Eligibility.ELIGIBLE)}
        >
          <Check />
          <Text style={styles.buttonBottomText}>Yes, I do</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  async function fetchEligReqs() {
    if (caseUid) {
      const reqs = await getReqsById(caseUid);
      console.log(reqs);
      setEligReqs(reqs);
      console.log(eligReqs);
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
      <FlatList
        contentContainerStyle={styles.flatty}
        ListHeaderComponent={caseHeader}
        ListFooterComponent={caseFooter}
        data={eligReqs ? eligReqs : []}
        renderItem={({ item }) => Item({ item })}
        //keyExtractor={index => index.toString()}
      />
    </View>
  );
}
