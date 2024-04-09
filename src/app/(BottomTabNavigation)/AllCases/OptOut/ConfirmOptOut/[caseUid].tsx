import { router, useLocalSearchParams } from 'expo-router';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import CircleCheckWhite from '../../../../../../assets/circle-check-white.svg';
import LittlePerson from '../../../../../../assets/little-person.svg';
import Warning from '../../../../../../assets/open-warning.svg';
import X from '../../../../../../assets/x.svg';
import { CaseContext } from '../../../../../context/CaseContext';
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
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.topText}>Indicate that you've opted out?</Text>
          <View style={styles.infoContainer}>
            <View style={styles.textIconContainer}>
              <Warning style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.blurb}>
                  Once you’ve opted out, this case will become inactive.
                </Text>
              </View>
            </View>
            <View style={styles.textIconContainer}>
              <LittlePerson style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.blurb}>
                  You can still view and share case details, but won’t be able
                  to change file a claim.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.cancelButton}
            >
              <View style={styles.buttonContent}>
                <X />
                <Text style={styles.cancelText}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity onPress={deleteCase} style={styles.confirmButton}>
              <View style={styles.buttonContent}>
                <CircleCheckWhite />
                <Text style={styles.confirmText}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
export default ConfirmOptOut;
