import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import Check from '../../../../../assets/check-circle.svg';
import RedWarning from '../../../../../assets/red-warning.svg';
import Ex from '../../../../../assets/x.svg';
import PressableRequirement from '../../../../Components/PressableRequirement/PressableRequirement';
import {
  updateCaseStatus,
  getCaseById,
} from '../../../../supabase/queries/cases';
import { getRequirementsByCaseUid } from '../../../../supabase/queries/eligibility';
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

  async function fetchCaseData() {
    if (caseUid) {
      const caseData = await getCaseById(caseUid);
      setCaseData(caseData);
    }
  }

  async function fetchEligibilityRequirments() {
    if (caseUid) {
      const requirements = await getRequirementsByCaseUid(caseUid);
      setEligibilityRequirements(requirements);
    }
  }

  async function confirmEligibility() {
    if (caseUid !== undefined) {
      await updateCaseStatus(caseUid, Eligibility.ELIGIBLE);
      router.back();
    }
  }

  function confirmIneligibility() {
    router.push(`AllCases/EligibilityForm/ConfirmIneligibility/${caseUid}`);
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
              <Image
                style={styles.imageContainer}
                source={{ uri: caseData.imageUrl }}
                contentFit="cover"
                transition={300}
              />
              <View style={styles.infoRow}>
                <RedWarning />
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
            <PressableRequirement
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
                  onPress={() => confirmIneligibility()}
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
                  onPress={() => confirmEligibility()}
                >
                  <Check />
                  <Text style={[styles.bodyText, styles.eligibleButtonText]}>
                    Yes, I do
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          }
          ListEmptyComponent={
            <View style={styles.listEmptyContainer}>
              <Text style={styles.bodyText}>
                There are no requirements for this case.
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
}
