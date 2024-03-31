import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native';

import Requirement from './Requirement';
import styles from './styles';
import Check from '../../../../../assets/check-circle.svg';
import Error from '../../../../../assets/exclamation.svg';
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
  const [eligibilityRequirements, setEligibilityRequirements] = useState<
    EligibilityRequirement[]
  >([]);
  const [checkCount, setCheckCount] = useState(0);

  async function fetchEligibilityRequirments() {
    if (caseUid) {
      const requirements = await getReqsById(caseUid);
      setEligibilityRequirements(requirements);
    }
  }

  async function fetchCaseData() {
    if (caseUid) {
      const caseData = await getCaseById(caseUid);
      setCaseData(caseData);
    }
  }

  async function updateEligibility(status: Eligibility) {
    if (caseUid !== undefined) {
      await updateCaseStatus(caseUid, status);
      router.back();
    }
  }

  useEffect(() => {
    fetchCaseData();
    fetchEligibilityRequirments();
  }, []);

  return (
    <View style={styles.container}>
      {caseData === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          style={styles.contentContainer}
          contentContainerStyle={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.titleText}>{caseData.title}</Text>
              <Image style={styles.image} source={{ uri: caseData.imageUrl }} />
              <View style={styles.infoRow}>
                <Error />
                <View style={{ flex: 1 }}>
                  <Text style={styles.bodyText}>
                    You must meet every requirement to be eligible for this
                    class-action.
                  </Text>
                </View>
              </View>
            </View>
          }
          data={eligibilityRequirements}
          keyExtractor={item => item.eligibilityUid}
          renderItem={({ item }) => (
            <Requirement
              requirement={item.requirement}
              checkCount={checkCount}
              setCheckCount={setCheckCount}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separatorLine} />}
          ListFooterComponent={
            <View style={styles.footerContainer}>
              <Text style={styles.bodyText}>
                Do you meet the following requirements?
              </Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={[styles.buttonBase, styles.ineligbleButton]}
                  onPress={() => updateEligibility(Eligibility.INELIGIBLE)}
                >
                  <Ex />
                  <Text style={styles.bodyText}>No, I don't</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={checkCount !== eligibilityRequirements.length}
                  style={
                    checkCount === eligibilityRequirements.length
                      ? [styles.buttonBase, styles.eligibleButton]
                      : [styles.buttonBase, styles.inactiveEligibleButton]
                  }
                  onPress={() => updateEligibility(Eligibility.ELIGIBLE)}
                >
                  <Check />
                  <Text style={[styles.bodyText, styles.eligibleButtonText]}>
                    Yes, I do
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        />
      )}
    </View>
  );
}
