import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import Mail from '../../../../../assets/big-envelope.svg';
import BlackRightArrow from '../../../../../assets/black-right-arrow.svg';
import Reset from '../../../../../assets/reset-password-refresh.svg';
import RightWhiteArrow from '../../../../../assets/right-arrow-white.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../../components/AuthButton/AuthButton';
import { fonts } from '../../../../styles/fonts';
import { device } from '../../../../styles/global';
import { instruction } from '../../../../styles/instruction';
import { getCaseById } from '../../../../supabase/queries/cases';
import { Case, CaseUid } from '../../../../types/types';
import { openUrl } from '../utils';

export default function OptOutScreen() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const [caseData, setCaseData] = useState<Case>();

  async function fetchCaseData() {
    if (caseUid) {
      const caseData = await getCaseById(caseUid);
      setCaseData(caseData);
    }
  }

  function navigateToOptOutLink() {
    const claimLink = caseData?.optOutLink;
    if (claimLink) {
      openUrl(claimLink);
    }
  }

  useEffect(() => {
    fetchCaseData();
  }, []);

  return (
    <View style={device.safeArea}>
      {caseData === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <View style={instruction.screenContainer}>
          <View style={instruction.contentContainer}>
            <Text style={fonts.instructionHeading}>Opting out of a case</Text>

            <View style={instruction.instructionContainer}>
              <View style={instruction.instructionRow}>
                <Mail />
                <View style={instruction.textContainer}>
                  <Text style={fonts.greyBody}>
                    You must first Opt-Out on the official case website linked
                    below.{' '}
                  </Text>
                </View>
              </View>

              <View style={instruction.instructionRow}>
                <Reset />
                <View style={instruction.textContainer}>
                  <Text style={fonts.greyBody}>
                    Once you opt-out online, please confirm that you've opted
                    out on the following screen.{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={instruction.buttonsContainer}>
            <ButtonWhite onPress={navigateToOptOutLink}>
              <Text style={fonts.blackButton}>Take Me to Opt Out Link</Text>
              <BlackRightArrow />
            </ButtonWhite>

            <ButtonBlack
              onPress={() =>
                router.push(`/AllCases/OptOut/ConfirmOptOut/${caseUid}`)
              }
            >
              <Text style={fonts.whiteButton}>I've Already Opted Out</Text>
              <RightWhiteArrow />
            </ButtonBlack>
          </View>
        </View>
      )}
    </View>
  );
}
