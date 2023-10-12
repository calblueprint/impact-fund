import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import CaseCard from './CaseCard/CaseCard';
import styles from './styles';

export type Case = {
  uid: string;
  title: string;
  status: string;
  imageUrl: string;
};

function CasesScreen() {
  const [cases, setCases] = useState<Case[]>([
    {
      uid: '1',
      title: 'State of California v. JUUL Labs, Inc.',
      status: 'In Progress',
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      uid: '2',
      title: 'State of California v. Ford Motor Co.',
      status: 'Settled',
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      uid: '3',
      title: 'State of California v. JUUL Labs, Inc.',
      status: 'In Progress',
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      uid: '4',
      title: 'State of California v. Ford Motor Co.',
      status: 'Settled',
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>This is the cases screen!</Text>
      </View>
      <View style={styles.casesContainer}>
        <FlatList
          data={cases}
          renderItem={({ item }) => (
            <CaseCard
              title={item.title}
              status={item.status}
              imageUrl={item.imageUrl}
            />
          )}
          keyExtractor={item => item.uid}
        />
      </View>
    </View>
  );
}

export default CasesScreen;
