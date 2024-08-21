// import * as Notifications from 'expo-notifications';
// import { router } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { FlatList, Text, View } from 'react-native';

import styles from './styles';
import CaseCard from '../../../Components/CaseCard/CaseCard';
import ScreenLoadingComponent from '../../../Components/ScreenLoadingComponent/ScreenLoadingComponent';
import { useCaseContext } from '../../../context/CaseContext';
import { fonts } from '../../../styles/fonts';
import { device } from '../../../styles/global';

import 'react-native-url-polyfill/auto';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

function CasesScreen() {
  // const responseListener = useRef<Notifications.Subscription>();

  const { allCases, loading } = useCaseContext();

  // function routeUserToUpdate(response: Notifications.NotificationResponse) {
  //   const updateId = response.notification.request.content.data.updateId;
  //   const caseId = response.notification.request.content.data.caseId;
  //   router.push(`/AllCases/CaseScreen/${caseId}`);
  //   router.push(`/AllCases/Updates/${caseId}`);
  //   router.push(`/AllCases/Updates/UpdateView/${updateId}`);
  // }

  // useEffect(() => {
  //   // triggered when a user presses on the notification
  //   responseListener.current =
  //     Notifications.addNotificationResponseReceivedListener(response => {
  //       routeUserToUpdate(response);
  //     });

  //   return () =>
  //     Notifications.removeNotificationSubscription(responseListener.current!);
  // }, []);

  return (
    <View style={device.safeArea}>
      <View style={styles.casesContainer}>
        {loading ? (
          <ScreenLoadingComponent />
        ) : (
          <FlatList
            contentContainerStyle={styles.innerScroll}
            ListHeaderComponent={() => (
              <>
                <View style={styles.headerContainer}>
                  <Text style={fonts.tabHeading}>My Cases</Text>
                </View>
              </>
            )}
            data={allCases}
            renderItem={({ item }) => <CaseCard {...item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text style={fonts.greyBody}>
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
