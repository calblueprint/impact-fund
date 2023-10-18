import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { Case } from '../../../../types/types';

function CaseCard({ title, caseStatus, image }: Case) {
  return (
    <TouchableOpacity style={styles.caseCard}>
      <View style={styles.infoContainer}>
        <Text style={styles.titleText} adjustsFontSizeToFit>
          {title}
        </Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{caseStatus}</Text>
        </View>
      </View>
      <Image
        style={styles.imagePlaceholder}
        source={{
          uri: image,
        }}
      />
    </TouchableOpacity>
  );
}

export default CaseCard;
