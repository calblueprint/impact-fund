import { Stack } from 'expo-router';
import React from 'react';

import CasesHeader from '../../../Components/CasesHeader/CasesHeader';
import { CaseContextProvider } from '../../../context/CaseContext';

export default function CasesLayout() {
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
          name="QRCodeScanner/AddCase/index"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="CaseScreen/index"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
        <Stack.Screen
          name="CaseSummaryScreen/index"
          options={{
            headerTitle: props => <CasesHeader />,
          }}
        />
      </Stack>
    </CaseContextProvider>
  );
}
