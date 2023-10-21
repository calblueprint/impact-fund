import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { Case } from '../../types/types';

function CaseCard(caseData: Case) {
  return (
    <TouchableOpacity
      style={styles.caseCard}
      onPress={() =>
        router.push({
          pathname: `/Cases/CaseScreen`,
          params: {
            id: caseData.id,
            approved: caseData.approved,
            title: caseData.title,
            blurb: caseData.blurb,
            summary: caseData.summary,
            image: caseData.image,
            caseSite: caseData.caseSite,
            claimLink: caseData.claimLink,
            optOutLink: caseData.optOutLink,
            caseStatus: caseData.caseStatus,
            date: caseData.date,
            lawFirm: caseData.lawFirm,
          },
        })
      }
    >
      <View style={styles.infoContainer}>
        <Text style={styles.titleText} adjustsFontSizeToFit>
          {caseData.title}
        </Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{caseData.caseStatus}</Text>
        </View>
      </View>
      <Image
        style={styles.imagePlaceholder}
        source={{
          uri: caseData.image,
        }}
      />
    </TouchableOpacity>
  );
}

export default CaseCard;
