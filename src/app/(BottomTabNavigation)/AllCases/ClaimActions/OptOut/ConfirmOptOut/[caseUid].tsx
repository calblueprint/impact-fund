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
import { CaseUid } from '../../../../../../types/types';
import styles from '../../styles';

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
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.contentContainer}>
          <Text style={fonts.tabHeading}>Indicate that you've opted out?</Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Warning />
              <View style={styles.textContainer}>
                <Text style={fonts.greyBody}>
                  Once you’ve opted out, this case will become inactive.
                </Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <LittlePerson />
              <View style={styles.textContainer}>
                <Text style={fonts.greyBody}>
                  You can still view and share case details, but won’t be able
                  to change file a claim.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.inLineButtons}>
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
