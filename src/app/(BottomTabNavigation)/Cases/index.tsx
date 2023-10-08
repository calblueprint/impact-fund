import React from 'react';
import { Text, View } from 'react-native';
import CaseCard from './CaseCard/CaseCard';
import styles from './styles';

function CasesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>This is the cases screen!</Text>
      </View>
      <View style={styles.casesContainer}>
        <CaseCard />
        <CaseCard />
      </View>
    </View>
  );
}

export default CasesScreen;
