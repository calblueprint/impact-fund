import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import styles from './styles';
import Check from '../../../../../assets/check-circle.svg';
import RedWarning from '../../../../../assets/red-warning.svg';
import Ex from '../../../../../assets/x.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../../Components/AuthButton/AuthButton';
import PressableRequirement from '../../../../Components/PressableRequirement/PressableRequirement';
import { CaseContext } from '../../../../context/CaseContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { input } from '../../../../styles/input';
import { getCaseById } from '../../../../supabase/queries/cases';
import { getRequirementsByCaseUid } from '../../../../supabase/queries/eligibility';
import {
  Case,
  CaseUid,
  ClaimStatus,
  EligibilityRequirement,
} from '../../../../types/types';
import { resetAndPushToRouter } from '../utils';

export default function EligibilityForm() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const [caseData, setCaseData] = useState<Case>();
  const [eligibilityRequirements, setEligibilityRequirements] = useState<
    EligibilityRequirement[]
  >([]);
  const [checkCount, setCheckCount] = useState(0);
  const [queryLoading, setQueryLoading] = useState(false);

  const { updateClaimStatus } = useContext(CaseContext);

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
    setQueryLoading(true);
    if (caseUid !== undefined) {
      await updateClaimStatus(caseUid, ClaimStatus.ELIGIBLE);
      resetAndPushToRouter('/AllCases');
      router.push(`/AllCases/CaseScreen/${caseUid}`);
    }
    setQueryLoading(false);
  }

  function confirmIneligibility() {
    router.push(`AllCases/EligibilityForm/ConfirmIneligibility/${caseUid}`);
  }

  useEffect(() => {
    fetchCaseData();
    fetchEligibilityRequirments();
  }, []);

  return (
    <View style={device.safeArea}>
      {caseData === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          style={styles.contentContainer}
          contentContainerStyle={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={[fonts.tabHeading, styles.titleText]}>
                {caseData.title}
              </Text>
              <Image
                style={styles.imageContainer}
                source={{ uri: caseData.imageUrl }}
                contentFit="cover"
                transition={300}
              />
              <View style={styles.infoRow}>
                <RedWarning />
                <View style={{ flex: 1 }}>
                  <Text style={fonts.body}>
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
              <Text style={fonts.body}>
                Do you meet the following requirements?
              </Text>
              <View style={styles.buttonsContainer}>
                <ButtonWhite
                  onPress={() => confirmIneligibility()}
                  $halfWidth
                  $centeredContent
                >
                  <View style={input.groupButtonContent}>
                    <Ex />
                    <Text style={fonts.blackButton}>No, I don't</Text>
                  </View>
                </ButtonWhite>
                <ButtonBlack
                  disabled={
                    checkCount !== eligibilityRequirements.length ||
                    queryLoading
                  }
                  onPress={() => confirmEligibility()}
                  $halfWidth
                  $centeredContent
                >
                  <View style={input.groupButtonContent}>
                    {queryLoading ? <ActivityIndicator /> : <Check />}
                    <Text style={fonts.whiteButton}>Yes, I do</Text>
                  </View>
                </ButtonBlack>
              </View>
            </View>
          }
          ListEmptyComponent={
            <View style={styles.listEmptyContainer}>
              <Text style={fonts.body}>
                There are no requirements for this case.
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
}
