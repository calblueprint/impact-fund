import * as Notifications from 'expo-notifications';
import { Stack } from 'expo-router';
import React, { useEffect } from 'react';

import CasesHeader from '../../../Components/CasesHeader/CasesHeader';
import { CaseContextProvider } from '../../../context/CaseContext';

export default function CasesLayout() {
  useEffect(() => {
    const notificationListener = Notifications.addNotificationReceivedListener(
      notification => {
        // setNotification(notification);
        console.log(notification);
      },
    );

    const responseListener =
      Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });

    // triggerNotification();

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);
  return (
    <CaseContextProvider>
      <Stack
        screenOptions={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="QRCodeScanner/index"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="AddCase/[caseUid]"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="CaseScreen/[caseUid]"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="CaseSummaryScreen/[caseUid]"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="EligibilityForm/[caseUid]"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="EligibilityForm/ConfirmIneligibility/[caseUid]"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="Forms/[caseUid]"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="Forms/FormView/index"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="Updates/[caseUid]"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="Updates/UpdateView/[updateUid]"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="OptOut/[caseUid]"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="OptOut/ConfirmOptOut/[caseUid]"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
      </Stack>
    </CaseContextProvider>
  );
}
