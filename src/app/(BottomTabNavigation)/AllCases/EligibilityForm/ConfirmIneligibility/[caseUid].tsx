import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import Alarm from '../../../../../../assets/alarm-triangle.svg';
import Ex from '../../../../../../assets/cancel-x-icon.svg';
import Check from '../../../../../../assets/check-circle.svg';
import PersonCross from '../../../../../../assets/person-cross.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../../../Components/AuthButton/AuthButton';
import { useCaseContext } from '../../../../../context/CaseContext';
import { fonts } from '../../../../../styles/fonts';
import { device } from '../../../../../styles/global';
import { input } from '../../../../../styles/input';
import { instruction } from '../../../../../styles/instruction';
import {
  fullStopErrorHandler,
  resetAndPushToRoute,
} from '../../../../../supabase/queries/auth';
import { CaseUid } from '../../../../../types/types';

export default function ConfirmEligibility() {
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const { leaveCase } = useCaseContext();
  const [queryLoading, setQueryLoading] = useState<boolean>(false);

  async function deleteCase() {
    setQueryLoading(true);
    if (caseUid) {
      await leaveCase(caseUid)
        .then(() => resetAndPushToRoute('/AllCases'))
        .catch(response => fullStopErrorHandler(response));
    }
    setQueryLoading(false);
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

          <ButtonBlack
            onPress={() => deleteCase()}
            disabled={queryLoading}
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
    </View>
  );
}
