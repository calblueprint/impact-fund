import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import CaseCard from './CaseCard/CaseCard';
import styles from './styles';
import { CaseCardProps } from './types';
import fetchListViewCases from './utils';

function CasesScreen() {
  const [cases, setCases] = useState<CaseCardProps[]>([]);

  useEffect(() => {
    fetchListViewCases().then(data => {
      setCases(data);
    });
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
              uid={item.uid}
              title={item.title}
              status={item.status}
              imageUrl={item.imageUrl}
            />
          )}
          keyExtractor={item => String(item.uid)}
        />
      </View>
    </View>
  );
}

export default CasesScreen;
