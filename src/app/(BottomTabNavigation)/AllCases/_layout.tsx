import { Stack } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

import BackArrow from '../../../../assets/left-caret.svg';
import CasesHeader from '../../../Components/CasesHeader/CasesHeader';
import { CaseContextProvider } from '../../../context/CaseContext';

export default function CasesLayout() {
  return (
    <CaseContextProvider>
      <Stack
        screenOptions={{
          headerShown: true,
          headerBackTitleVisible: true,
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
      </Stack>
    </CaseContextProvider>
  );
}
