import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

type caseCardProps = {
  title: string;
  status: string;
  imageUrl?: string;
  // navigationURL?: string;
};

function CaseCard({ title, status, imageUrl }: caseCardProps) {
  return (
    <TouchableOpacity style={styles.caseCard}>
      <View style={styles.infoContainer}>
        <Text style={styles.titleText} adjustsFontSizeToFit>
          {title}
        </Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>
      <Image
        style={styles.imagePlaceholder}
        source={{
          uri: imageUrl,
        }}
      />
    </TouchableOpacity>
  );
}

export default CaseCard;
