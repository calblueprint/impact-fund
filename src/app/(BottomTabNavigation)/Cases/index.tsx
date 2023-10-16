import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import CaseCard from './CaseCard/CaseCard';
import styles from './styles';
import { CaseCardProps, UserUid } from './types';
import fetchListViewCases from './utils';

function CasesScreen() {
  const [cases, setCases] = useState<CaseCardProps[]>([]);

  // TODO: fetch user Uid from context/state
  const userUid: UserUid = '51e151b4-b7e6-4c35-adcc-f91a3614ad9b';

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
              status={item.status}
              imageUrl={item.imageUrl}
            />
          )}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </View>
  );
}

export default CasesScreen;
