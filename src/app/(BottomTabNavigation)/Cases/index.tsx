import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import CaseCard from './CaseCard/CaseCard';
import styles from './styles';
import fetchListViewCases from './utils';
import supabase from '../../../supabase/createClient';
import { Case, UserUid } from '../../../types/types';

function CasesScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cases, setCases] = useState<Case[]>([]);
  const [userUid, setUserUid] = useState<UserUid>(
    'f6f9223b-503a-4235-b4d9-3639d74a13d5',
  );

  function fetchCasesOnLoad(id: UserUid) {
    // fetch user Uid and compare it to default value
    console.log('DEBUG: userUid: ', id);
    fetchListViewCases(id).then(data => {
      setCases(data);
    });
  }

  useEffect(() => {
    supabase.auth.getUser().then(data => {
      if (data.data.user) {
        setUserUid(data.data.user.id);
        setIsLoading(false);
        fetchCasesOnLoad(data.data.user.id);
      }
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
