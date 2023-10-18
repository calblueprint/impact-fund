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
  const [noCasesExist, setNoCasesExist] = useState<boolean>(false);
  const [cases, setCases] = useState<Case[]>([]);

  // fetch on load can be reused if user wants to reload
  // would require changing function argument to UserUid state
  async function fetchCasesOnLoad(id: UserUid) {
    fetchListViewCases(id).then(data => {
      // data fetched and ready for render
      setIsLoading(false);
      if (data.length > 0) {
        setCases(data);
      } else {
        setNoCasesExist(true);
      }
    });
  }

  useEffect(() => {
    // TODO: fetches userUid on initial page render -- consider making this a state variable
    supabase.auth.getUser().then(data => {
      // if condition ensures that the user exists and is logged in
      // TODO: double check logic to ensure this a null user cannot occur
      if (data.data.user?.id) {
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
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            {noCasesExist ? (
              <Text>Scan your first case using the QR code above!</Text>
            ) : (
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
            )}
          </>
        )}
      </View>
    </View>
  );
}

export default CasesScreen;
