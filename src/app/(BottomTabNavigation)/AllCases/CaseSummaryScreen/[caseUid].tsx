import { useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import styles from './styles';
import CaseSummaryContent from '../../../../Components/CaseSummaryContent/CaseSummaryContent';
import ExternalSiteLink from '../../../../Components/ExternalSiteLink/ExternalSiteLink';
import ScreenLoadingComponent from '../../../../Components/ScreenLoadingComponent/ScreenLoadingComponent';
import { device } from '../../../../styles/global';
import { getCaseById } from '../../../../supabase/queries/cases';
import { Case } from '../../../../types/types';

export default function CaseSummaryScreen() {
  const { caseUid } = useLocalSearchParams<{ caseUid: string }>();
  const [caseData, setCaseData] = useState<Case>();

  const getCase = async (uid: string) => {
    const caseData = await getCaseById(uid);
    setCaseData(caseData);
  };

  useEffect(() => {
    if (caseUid !== undefined) {
      getCase(caseUid);
    }
  }, []);

  return (
    <View style={device.safeArea}>
      {caseData === undefined ? (
        <ScreenLoadingComponent />
      ) : (
        <>
          <CaseSummaryContent {...caseData} />
          <View style={styles.linkContainer}>
            <ExternalSiteLink
              text="Learn more on case website"
              url={caseData.caseSite}
            />
          </View>
        </>
      )}
    </View>
  );
}
