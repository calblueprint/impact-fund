import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import Mail from '../../../../../../assets/big-envelope.svg';
import BlackRightArrow from '../../../../../../assets/black-right-arrow.svg';
import Reset from '../../../../../../assets/reset-password-refresh.svg';
import RightWhiteArrow from '../../../../../../assets/right-arrow-white.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../../../Components/AuthButton/AuthButton';
import { fonts } from '../../../../../styles/fonts';
import instructionScreen from '../../../../../styles/instructionScreen';
import { getCaseById } from '../../../../../supabase/queries/cases';
import { Case, CaseUid } from '../../../../../types/types';
import { openUrl } from '../../utils';

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
    <View style={instructionScreen.container}>
      {caseData === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <View style={instructionScreen.screenContainer}>
          <View style={instructionScreen.contentContainer}>
            <Text style={fonts.tabHeading}>Opting out of a case</Text>

            <View style={instructionScreen.instructionContainer}>
              <View style={instructionScreen.instructionRow}>
                <Mail />
                <View style={instructionScreen.textContainer}>
                  <Text style={fonts.greyBody}>
                    You must first Opt-Out on the official case website linked
                    below.{' '}
                  </Text>
                </View>
              </View>

              <View style={instructionScreen.instructionRow}>
                <Reset />
                <View style={instructionScreen.textContainer}>
                  <Text style={fonts.greyBody}>
                    Once you opt-out online, please confirm that you've opted
                    out on the following screen.{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={instructionScreen.buttonsContainer}>
            <ButtonWhite onPress={navigateToOptOutLink}>
              <Text style={fonts.blackButton}>Take Me to Opt Out Link</Text>
              <BlackRightArrow />
            </ButtonWhite>

            <ButtonBlack
              onPress={() =>
                router.push(
                  `/AllCases/ClaimActions/OptOut/ConfirmOptOut/${caseUid}`,
                )
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
