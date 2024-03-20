import * as Linking from 'expo-linking';
import { Link, router } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { parse } from 'yargs';

import styles from './styles';
import Camera from '../../../../assets/camera.svg';
import CaseCard from '../../../Components/CaseCard/CaseCard';
import { useSession } from '../../../context/AuthContext';
import { CaseContext } from '../../../context/CaseContext';
import {
  registerForPushNotifications,
  updatePushToken,
} from '../../../supabase/pushNotifications';
import 'react-native-url-polyfill/auto';

function CasesScreen() {
  const { allCases, loading } = useContext(CaseContext);
  const { session } = useSession();

  const [parsedUrl, setUrl] = useState<Linking.ParsedURL | null>(null);

  function urlRedirect(url: Linking.ParsedURL) {
    if (!url) return;
    // parse and redirect to new url
    const { queryParams } = url;
    console.log(
      `Linked into the app according to the following query parameters: ${JSON.stringify(
        queryParams,
      )}`,
    );
    if (queryParams) {
      router.push({
        pathname: `/AllCases/AddCase/${queryParams.caseUid}`,
      });
    }
  }

  function handleDeepLink(event: any) {
    const parsedUrl = Linking.parse(event.url);
    setUrl(parsedUrl);
    if (parsedUrl) {
      urlRedirect(parsedUrl);
    }
  }

  // async function getInitialUrl() {
  //   const initialUrl = await Linking.getInitialURL();
  //   if (initialUrl) {
  //     setUrl(Linking.parse(initialUrl));
  //   }
  // }

  useEffect(() => {
    Linking.addEventListener('url', handleDeepLink);
    // if (!parsedUrl) {
    //   getInitialUrl().then(() => {
    //     console.log('urlRedirect triggered');
    //     urlRedirect(parsedUrl);
    //   });
    // }

    if (session?.user) {
      registerForPushNotifications().then(async (token: string) => {
        updatePushToken(session.user.id, token);
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.casesContainer}>
        <Text>
          {parsedUrl
            ? JSON.stringify(parsedUrl)
            : 'app not opened with a deep link'}
        </Text>
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
                <TouchableOpacity
                  onPress={() => router.push('/AllCases/QRCodeScanner')}
                  style={styles.cameraContainer}
                >
                  <View style={styles.buttonInfoContainer}>
                    <Camera />
                    <Text style={styles.cameraText}>Add Case with QR code</Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
            data={allCases}
            renderItem={({ item }) => <CaseCard {...item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text>Scan your first case using the QR code above!</Text>
            }
          />
        )}
      </View>
    </View>
  );
}

export default CasesScreen;
