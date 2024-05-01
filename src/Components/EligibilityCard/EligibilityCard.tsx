import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import CheckEligibility from '../../../assets/check-eligibility.svg';
import Fileclaim from '../../../assets/file-claim.svg';
import Arrow from '../../../assets/next.svg';
import OptOut from '../../../assets/opt-out.svg';
import { openUrl } from '../../app/(BottomTabNavigation)/AllCases/utils';
import globalStyles from '../../styles/global';
import { Case, CaseUid, Eligibility } from '../../types/types';
import EligibleFilingButton from '../EligibilityFilingButton/EligibilityFilingButton';
import ToggleOptionsButton from '../ToggleOptionsButton/ToggleOptionsButton';

interface EligibilityCardProps {
  caseUid: CaseUid;
}

export default function EligibleFilingOptions({
  caseUid,
}: EligibilityCardProps) {
  const [isFileClaimSelected, setSelected] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <ToggleOptionsButton
        isDefaultSelected={isFileClaimSelected}
        setSelected={setSelected}
      />

      {isFileClaimSelected ? (
        <EligibleFilingButton
          mainText="Eligible class members can submit a claim electronically to
        receive a settlement."
          instructionText="File or update my claim"
          route={`/AllCases/FileClaim/${caseUid}`}
        />
      ) : (
        <EligibleFilingButton
          mainText="Opt out to remove yourself from this class action and deactivate
          this case."
          instructionText="View options for opting out"
          route={`/AllCases/OptOut/${caseUid}`}
        />
      )}
    </View>
  );
}
