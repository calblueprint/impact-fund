import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import React, { useContext, useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';

import styles from './styles';
import CaseCard from '../../../Components/CaseCard/CaseCard';
import { useSession } from '../../../context/AuthContext';
import { CaseContext } from '../../../context/CaseContext';
import {
  registerForPushNotifications,
  updatePushToken,
} from '../../../supabase/pushNotifications';

import 'react-native-url-polyfill/auto';
enum linkingEvents {
  ADD_CASE = 'addCase',
  NOTIFICATION = 'notification',
}

function CasesScreen() {
  const { allCases } = useContext(CaseContext);
  const { loading } = useContext(CaseContext);
  const { session } = useSession();

  const [url, setUrl] = useState<Linking.ParsedURL | null>(null);

  function urlRedirect(parsedUrl: Linking.ParsedURL) {
    if (!parsedUrl) return;
    // parse query params and determine routing
    const { queryParams } = parsedUrl;
    // determine routing from the event variable
    if (queryParams?.event) {
      const event = queryParams.event.toString();
      // TODO: determine a way to validate required parameters
      // TODO: prevent users from routing to a case they're already involved in
      if (event === linkingEvents.ADD_CASE)
        router.push({
          pathname: `/AllCases/AddCase/${queryParams.caseUid}`,
        });
    }
  }

  function handleDeepLink(event: any) {
    const parsedUrl = Linking.parse(event.url);
    if (parsedUrl) {
      setUrl(parsedUrl);
      urlRedirect(parsedUrl);
    }
  }

  async function getInitialUrl() {
    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      const parsed = Linking.parse(initialUrl);
      setUrl(parsed);
      urlRedirect(parsed);
    }
  }

  useEffect(() => {
    // will detect any incoming link requests, assuming the app is already open
    Linking.addEventListener('url', handleDeepLink);
    if (!url) {
      // if the link opened the app, must route to the initial incoming route
      getInitialUrl();
    }

    if (session?.user) {
      registerForPushNotifications().then(async (token: string) => {
        updatePushToken(session.user.id, token);
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.casesContainer}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            contentContainerStyle={styles.innerScroll}
            ListHeaderComponent={() => (
              <>
                <View style={styles.headerContainer}>
                  <Text style={styles.titleText}>My Cases</Text>
                </View>
              </>
            )}
            data={allCases}
            renderItem={({ item }) => <CaseCard {...item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text style={styles.instructionText}>
                No cases? Scan a QR code or ask a friend to share one.
              </Text>
            }
          />
        )}
      </View>
    </View>
  );
}

export default CasesScreen;
