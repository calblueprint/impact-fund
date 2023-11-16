import { router } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { fetchAllCases } from './utils';
import CaseCard from '../../../Components/CaseCard/CaseCard';
import supabase from '../../../supabase/createClient';
import { Case, UserUid } from '../../../types/types';

function CasesScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [noCasesExist, setNoCasesExist] = useState<boolean>(false);
  const [cases, setCases] = useState<Case[]>([]);

  // fetch on load can be reused if user wants to reload
  // would require changing function argument to UserUid state

  const fetchCasesOnLoad = useCallback(async (id: UserUid) => {
    const data = await fetchAllCases(id);
    if (data.length > 0) {
      setCases(data);
    } else {
      setNoCasesExist(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log('yo');
    async function getCases() {
      const data = await supabase.auth.getUser();
      if (data.data.user?.id) {
        await fetchCasesOnLoad(data.data.user.id);
      }
    }
    getCases();
    // TODO: fetches userUid on initial page render -- consider making this a state variable
    // TODO: double check logic to ensure this a null user cannot occur
  }, [fetchCasesOnLoad]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.push('/Cases/QRCodeScanner')}>
          <View style={styles.circle}>
            <Text>Camera</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.casesContainer}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            {noCasesExist ? (
              <Text>Scan your first case using the QR code above!</Text>
            ) : (
              <FlatList
                data={cases}
                renderItem={({ item }) => <CaseCard {...item} />}
                keyExtractor={item => item.id}
              />
            )}
          </>
        )}
      </View>
    </View>
  );
}

export default CasesScreen;
