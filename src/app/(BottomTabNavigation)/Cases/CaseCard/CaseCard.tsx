import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

function CaseCard() {
  return (
    <TouchableOpacity style={styles.caseCard}>
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>Longer Case title does it</Text>
        <View style={styles.caseStatus}>
          <Text style={styles.statusText}>In Progress</Text>
        </View>
      </View>
      <View style={styles.imagePlaceholder} />
    </TouchableOpacity>
  );
}

export default CaseCard;
