import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import Check from '../../../../../assets/check-circle.svg';
import Ch from '../../../../../assets/checkbox.svg';
import Error from '../../../../../assets/exclamation.svg';
import LineBig from '../../../../../assets/line-big.svg';
import LineSmall from '../../../../../assets/line-small.svg';
import Rectangle from '../../../../../assets/rectangle.svg';
import Ex from '../../../../../assets/x.svg';
import {
  updateCaseStatus,
  getCaseById,
} from '../../../../supabase/queries/cases';
import { Case, CaseUid, Eligibility } from '../../../../types/types';

type ItemData = {
  id: string;
  text: string;
};

export default function EligibilityForm() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const [caseData, setCaseData] = useState<Case>();
  const [numChecks, setNumChecks] = useState(0);

  const DATA: ItemData[] = [
    {
      id: '001',
      text: 'This is a requirement 1 that you should meet to file a claim',
    },
    {
      id: '002',
      text: 'This is a requirement 2 that you should meet to file a claim',
    },
    {
      id: '003',
      text: 'This is a requirement 3 that you should meet to file a claim',
    },
    {
      id: '004',
      text: 'This is a requirement 4 that you should meet to file a claim',
    },
    {
      id: '005',
      text: 'This is a requirement 5 that you should meet to file a claim',
    },
    {
      id: '006',
      text: 'This is a requirement 6 that you should meet to file a claim',
    },
  ];

  const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
      if (isChecked) {
        setNumChecks(numChecks + 1);
      } else if (isChecked === false && numChecks > 0) {
        setNumChecks(numChecks - 1);
      }
    };

    return (
      <TouchableOpacity onPress={toggleCheckbox}>
        {isChecked ? <Ch /> : <Rectangle />}
      </TouchableOpacity>
    );
  };

  const Item = ({ item }: { item: ItemData }) => (
    <View style={styles.centerContainer}>
      <View style={styles.list}>
        <Checkbox />
        <Text style={{ marginLeft: 10 }}>{item.text}</Text>
      </View>
      <LineSmall style={{ justifyContent: 'flex-end' }} />
    </View>
  );

  const caseHeader = () => (
    <View style={styles.centerContainer}>
      {caseData && (
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
          disabled={numChecks !== DATA.length}
          style={
            numChecks === DATA.length
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

  async function fetchCaseData() {
    if (caseUid) {
      const caseData = await getCaseById(caseUid);
      setCaseData(caseData);
    }
  }

  useEffect(() => {
    fetchCaseData();
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
        ListHeaderComponent={caseHeader}
        ListFooterComponent={caseFooter}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}
