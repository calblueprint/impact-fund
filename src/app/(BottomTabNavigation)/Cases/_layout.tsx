import { Stack } from 'expo-router';
import React from 'react';

import CasesHeader from '../../../Components/CasesHeader/CasesHeader';

export default function CasesLayout() {
  return (
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
      <Stack.Screen
        name="Forms/index"
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
    </Stack>
  );
}
