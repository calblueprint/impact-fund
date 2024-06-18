import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import BlackRightArrow from '../../../../../assets/black-right-arrow.svg';
import Document from '../../../../../assets/document-add.svg';
import Checkbox from '../../../../../assets/double-checkbox.svg';
import Fileclaim from '../../../../../assets/file-claim-small.svg';
import RightWhiteArrow from '../../../../../assets/right-arrow-white.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../../Components/AuthButton/AuthButton';
import ScreenLoadingComponent from '../../../../Components/ScreenLoadingComponent/ScreenLoadingComponent';
import { useCaseContext } from '../../../../context/CaseContext';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { instruction } from '../../../../styles/instruction';
import { resetAndPushToRoute } from '../../../../supabase/queries/auth';
import { getCaseById } from '../../../../supabase/queries/cases';
import { Case, CaseUid, ClaimStatus } from '../../../../types/types';
import { openUrl } from '../utils';

export default function FileClaimScreen() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const [caseData, setCaseData] = useState<Case>();
  const [queryLoading, setQueryLoading] = useState<boolean>(false);

  const { updateClaimStatus } = useCaseContext();

  async function fetchCaseData() {
    if (caseUid) {
      const caseData = await getCaseById(caseUid);
      setCaseData(caseData);
    }
  }

  function navigateToClaimLink() {
    const claimLink = caseData?.claimLink;
    if (claimLink) {
      openUrl(claimLink);
    }
  }

  async function confirmClaimFiled() {
    setQueryLoading(true);
    if (caseUid !== undefined) {
      await updateClaimStatus(caseUid, ClaimStatus.CLAIM_FILED);
      resetAndPushToRoute('/AllCases');
      router.push(`/AllCases/CaseScreen/${caseUid}`);
    }
    setQueryLoading(false);
  }

  useEffect(() => {
    fetchCaseData();
  }, []);

  return (
    <View style={device.safeArea}>
      {caseData === undefined ? (
        <ScreenLoadingComponent />
      ) : (
        <View style={instruction.screenContainer}>
          <View style={instruction.contentContainer}>
            <Text style={fonts.instructionHeading}>Filing a claim</Text>

            <View style={instruction.instructionContainer}>
              <View style={instruction.instructionRow}>
                <Fileclaim />
                <View style={instruction.textContainer}>
                  <Text style={fonts.greyBody}>
                    Filing a claim commits you to the class action and any
                    potential compensation awarded
                  </Text>
                </View>
              </View>

              <View style={instruction.instructionRow}>
                <Document />
                <View style={instruction.textContainer}>
                  <Text style={fonts.greyBody}>
                    Complete the required claim form on the official claim
                    filing site to submit your claim
                  </Text>
                </View>
              </View>

              <View style={instruction.instructionRow}>
                <Checkbox />
                <View style={instruction.textContainer}>
                  <Text style={fonts.greyBody}>
                    Come back to this screen to update your claim filing status
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={instruction.buttonsContainer}>
            <ButtonWhite onPress={() => navigateToClaimLink()}>
              <Text style={fonts.blackButton}>
                Take me to claim filing site
              </Text>
              <BlackRightArrow />
            </ButtonWhite>

            <ButtonBlack
              onPress={() => confirmClaimFiled()}
              disabled={queryLoading}
            >
              <Text style={fonts.whiteButton}>I’ve already filed a claim!</Text>
              {queryLoading ? <ActivityIndicator /> : <RightWhiteArrow />}
            </ButtonBlack>
          </View>
        </View>
      )}
    </View>
  );
}
