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
} from '../../../../../components/AuthButton/AuthButton';
import { CaseContext } from '../../../../../context/CaseContext';
import { fonts } from '../../../../../styles/fonts';
import { device } from '../../../../../styles/global';
import { input } from '../../../../../styles/input';
import { instruction } from '../../../../../styles/instruction';
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
    <View style={device.safeArea}>
      <View style={instruction.screenContainer}>
        <View style={instruction.contentContainer}>
          <Text style={fonts.instructionHeading}>
            Do you want to mark your status as ineligible?
          </Text>

          <View style={instruction.instructionContainer}>
            <View style={instruction.instructionRow}>
              <Alarm />
              <View style={instruction.textContainer}>
                <Text style={fonts.greyBody}>
                  Once you indicate ineligibility, this case will become
                  inactive.{' '}
                </Text>
              </View>
            </View>

            <View style={instruction.instructionRow}>
              <PersonCross />
              <View style={instruction.textContainer}>
                <Text style={fonts.greyBody}>
                  You can still view and share case details, but won’t be able
                  to change your eligibility status or file a claim.{' '}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={instruction.inLineButtons}>
          <ButtonWhite
            onPress={() => router.back()}
            $halfWidth
            $centeredContent
          >
            <View style={input.groupButtonContent}>
              <Ex />
              <Text style={fonts.blackButton}>No, I don't</Text>
            </View>
          </ButtonWhite>

          <ButtonBlack onPress={() => deleteCase()} $halfWidth $centeredContent>
            <View style={input.groupButtonContent}>
              <Check />
              <Text style={fonts.whiteButton}>Yes, I do</Text>
            </View>
          </ButtonBlack>
        </View>
      </View>
    </View>
  );
}
