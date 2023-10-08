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
        <CaseCard
          title="State of California v. JUUL Labs, Inc."
          status="In Progress"
          imageURL="https://reactnative.dev/img/tiny_logo.png"
        />
        <CaseCard
          title="State of California v. Ford Motor Co."
          status="Settled"
          imageURL="https://reactnative.dev/img/tiny_logo.png"
        />
      </View>
    </View>
  );
}

export default CasesScreen;
