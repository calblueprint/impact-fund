import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { CaseUid } from '../../types/types';

type CaseCardProps = {
  id: CaseUid;
  title: string;
  caseStatus: string;
  image: string;
};

function CaseCard({ id, title, caseStatus, image }: CaseCardProps) {
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
