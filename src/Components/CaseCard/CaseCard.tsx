import { router, Link } from 'expo-router';
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
          pathname: `/AllCases/CaseScreen/${caseData.id}`,
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
          uri: caseData.imageUrl,
        }}
      />
    </TouchableOpacity>
  );
}

export default CaseCard;
