import { router, useLocalSearchParams } from 'expo-router';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import CircleCheckWhite from '../../../../../../assets/circle-check-white.svg';
import LittlePerson from '../../../../../../assets/little-person.svg';
import Warning from '../../../../../../assets/open-warning.svg';
import X from '../../../../../../assets/x.svg';
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

function ConfirmOptOut() {
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
            Indicate that you've opted out?
          </Text>

          <View style={instruction.instructionContainer}>
            <View style={instruction.instructionRow}>
              <Warning />
              <View style={instruction.textContainer}>
                <Text style={fonts.greyBody}>
                  Once you’ve opted out, this case will become inactive.
                </Text>
              </View>
            </View>

            <View style={instruction.instructionRow}>
              <LittlePerson />
              <View style={instruction.textContainer}>
                <Text style={fonts.greyBody}>
                  You can still view and share case details, but won’t be able
                  to change file a claim.
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
              <X />
              <Text style={fonts.blackButton}>Cancel</Text>
            </View>
          </ButtonWhite>

          <ButtonBlack onPress={deleteCase} $halfWidth $centeredContent>
            <View style={input.groupButtonContent}>
              <CircleCheckWhite />
              <Text style={fonts.whiteButton}>Continue</Text>
            </View>
          </ButtonBlack>
        </View>
      </View>
    </View>
  );
}
export default ConfirmOptOut;
