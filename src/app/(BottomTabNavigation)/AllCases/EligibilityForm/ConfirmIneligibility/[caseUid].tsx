import { router, useLocalSearchParams } from 'expo-router';
import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import Alarm from '../../../../../../assets/alarm-triangle.svg';
import Ex from '../../../../../../assets/cancel-x-icon.svg';
import Check from '../../../../../../assets/check-circle.svg';
import PersonCross from '../../../../../../assets/person-cross.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../../../Components/AuthButton/AuthButton';
import { CaseContext } from '../../../../../context/CaseContext';
import { fonts } from '../../../../../styles/fonts';
import { inputScreenStyles } from '../../../../../styles/inputScreen';
import instructionScreen from '../../../../../styles/instructionScreen';
import { CaseUid } from '../../../../../types/types';

export default function ConfirmEligibility() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const { leaveCase } = useContext(CaseContext);

  async function deleteCase() {
    if (caseUid !== undefined) {
      await leaveCase(caseUid);
      router.push({
        pathname: '/AllCases',
      });
    }
  }

  return (
    <View style={instructionScreen.container}>
      <View style={instructionScreen.screenContainer}>
        <View style={instructionScreen.contentContainer}>
          <Text style={fonts.instructionHeading}>
            Do you want to mark your status as ineligible?
          </Text>

          <View style={instructionScreen.instructionContainer}>
            <View style={instructionScreen.instructionRow}>
              <Alarm />
              <View style={instructionScreen.textContainer}>
                <Text style={fonts.greyBody}>
                  Once you indicate ineligibility, this case will become
                  inactive.{' '}
                </Text>
              </View>
            </View>

            <View style={instructionScreen.instructionRow}>
              <PersonCross />
              <View style={instructionScreen.textContainer}>
                <Text style={fonts.greyBody}>
                  You can still view and share case details, but won’t be able
                  to change your eligibility status or file a claim.{' '}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={instructionScreen.inLineButtons}>
          <ButtonWhite
            onPress={() => router.back()}
            $halfWidth
            $centeredContent
          >
            <View style={inputScreenStyles.groupButtonContent}>
              <Ex />
              <Text style={fonts.blackButton}>No, I don't</Text>
            </View>
          </ButtonWhite>

          <ButtonBlack onPress={() => deleteCase()} $halfWidth $centeredContent>
            <View style={inputScreenStyles.groupButtonContent}>
              <Check />
              <Text style={fonts.whiteButton}>Yes, I do</Text>
            </View>
          </ButtonBlack>
        </View>
      </View>
    </View>
  );
}
