import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { CaseUid } from '../../types/types';
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
          route={`/AllCases/ClaimActions/FileClaim/${caseUid}`}
        />
      ) : (
        <EligibleFilingButton
          mainText="Opt out to remove yourself from this class action and deactivate
          this case."
          instructionText="View options for opting out"
          route={`/AllCases/ClaimActions/OptOut/${caseUid}`}
        />
      )}
    </View>
  );
}
