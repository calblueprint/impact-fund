import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import CaseCard from './CaseCard/CaseCard';
import styles from './styles';
import fetchListViewCases from './utils';
import { Case, UserUid } from '../../../types/types';

function CasesScreen() {
  const [cases, setCases] = useState<Case[]>([]);

  // TODO: fetch user Uid from context/state
  const userUid: UserUid = 'f6f9223b-503a-4235-b4d9-3639d74a13d5';

  useEffect(() => {
    fetchListViewCases(userUid).then(data => {
      setCases(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Link href="/QRCodeScanner" asChild>
          <TouchableOpacity>
            <View style={styles.circle}>
              <Text>Camera</Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.casesContainer}>
        <FlatList
          data={cases}
          renderItem={({ item }) => (
            <CaseCard
              id={item.id}
              title={item.title}
              caseStatus={item.caseStatus}
              image={item.image}
            />
          )}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </View>
  );
}

export default CasesScreen;
