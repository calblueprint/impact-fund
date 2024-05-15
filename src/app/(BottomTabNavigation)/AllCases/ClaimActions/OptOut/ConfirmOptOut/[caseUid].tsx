import { router, useLocalSearchParams } from 'expo-router';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import CircleCheckWhite from '../../../../../../../assets/circle-check-white.svg';
import LittlePerson from '../../../../../../../assets/little-person.svg';
import Warning from '../../../../../../../assets/open-warning.svg';
import X from '../../../../../../../assets/x.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../../../../Components/AuthButton/AuthButton';
import { CaseContext } from '../../../../../../context/CaseContext';
import { fonts } from '../../../../../../styles/fonts';
import { inputScreenStyles } from '../../../../../../styles/inputScreen';
import instructionScreen from '../../../../../../styles/instructionScreen';
import { CaseUid } from '../../../../../../types/types';

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
    <View style={instructionScreen.container}>
      <View style={instructionScreen.screenContainer}>
        <View style={instructionScreen.contentContainer}>
          <Text style={fonts.tabHeading}>Indicate that you've opted out?</Text>

          <View style={instructionScreen.instructionContainer}>
            <View style={instructionScreen.instructionRow}>
              <Warning />
              <View style={instructionScreen.textContainer}>
                <Text style={fonts.greyBody}>
                  Once you’ve opted out, this case will become inactive.
                </Text>
              </View>
            </View>

            <View style={instructionScreen.instructionRow}>
              <LittlePerson />
              <View style={instructionScreen.textContainer}>
                <Text style={fonts.greyBody}>
                  You can still view and share case details, but won’t be able
                  to change file a claim.
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
              <X />
              <Text style={fonts.blackButton}>Cancel</Text>
            </View>
          </ButtonWhite>

          <ButtonBlack onPress={deleteCase} $halfWidth $centeredContent>
            <View style={inputScreenStyles.groupButtonContent}>
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
