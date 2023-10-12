import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import CaseCard from './CaseCard/CaseCard';
import styles from './styles';
import { fetchListViewCases } from './utils';

export type Case = {
  uid: string;
  title: string;
  status: string;
  imageUrl: string;
};

function CasesScreen() {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    const fetchedCases = fetchListViewCases();
    setCases(fetchedCases);
  }, []);

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
