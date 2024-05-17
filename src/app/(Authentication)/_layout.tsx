import { Stack } from 'expo-router';
import React from 'react';

import { BackButtonNoText } from '../../components/BackButtons/BackButtons';
import {
  LeftAlignedHeader,
  EmptyHeader,
} from '../../components/HeaderComponents/HeaderComponents';
import { CaseContextProvider } from '../../context/CaseContext';

export default function CasesLayout() {
  return (
    <CaseContextProvider>
      <Stack
        screenOptions={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Welcome/index"
          options={{
            headerTitle: () => <LeftAlignedHeader />,
          }}
        />
        <Stack.Screen
          name="Login/Email/index"
          options={{
            headerLeft: () => <BackButtonNoText />,
            headerTitle: () => <EmptyHeader />,
          }}
        />
        <Stack.Screen
          name="Login/Password/index"
          options={{
            headerLeft: () => <BackButtonNoText />,
            headerTitle: () => <EmptyHeader />,
          }}
        />
        <Stack.Screen
          name="SignUp/Email/index"
          options={{
            headerLeft: () => <BackButtonNoText />,
            headerTitle: () => <EmptyHeader />,
          }}
        />
        <Stack.Screen
          name="SignUp/Password/index"
          options={{
            headerLeft: () => <BackButtonNoText />,
            headerTitle: () => <EmptyHeader />,
          }}
        />
        <Stack.Screen
          name="SignUp/Address/index"
          options={{
            headerTitle: () => <EmptyHeader />,
          }}
        />
        <Stack.Screen
          name="OTPFlow/OTPEmailInput/index"
          options={{
            headerLeft: () => <BackButtonNoText />,
            headerTitle: () => <EmptyHeader />,
          }}
        />
        <Stack.Screen
          name="OTPFlow/OTPVerify/index"
          options={{
            headerLeft: () => <BackButtonNoText />,
            headerTitle: () => <EmptyHeader />,
          }}
        />
        <Stack.Screen
          name="OTPFlow/OTPNewPassword/index"
          options={{
            headerTitle: () => <EmptyHeader />,
          }}
        />
      </Stack>
    </CaseContextProvider>
  );
}
