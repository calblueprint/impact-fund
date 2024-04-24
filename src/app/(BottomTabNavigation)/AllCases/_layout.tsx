import { Stack } from 'expo-router';
import React from 'react';

import { BackButtonText } from '../../../Components/BackButtons/BackButtons';
import {
  LeftAlignedHeaderLine,
  HeaderImage,
  EmptyHeader,
} from '../../../Components/HeaderComponents/HeaderComponents';
import { CaseContextProvider } from '../../../context/CaseContext';

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
          name="index"
          options={{
            headerTitle: props => <LeftAlignedHeaderLine />,
          }}
        />
        <Stack.Screen
          name="QRCodeScanner/index"
          options={{
            headerTitle: props => <HeaderImage />,
          }}
        />
        <Stack.Screen
          name="AddCase/[caseUid]"
          options={{
            headerTitle: props => <HeaderImage />,
          }}
        />
        <Stack.Screen
          name="CaseScreen/[caseUid]"
          options={{
            headerLeft: () => <BackButtonText backText="Cases" />,
            headerTitle: () => <HeaderImage />,
            // headerRight: () => <ShareIcon />,
          }}
        />
        <Stack.Screen
          name="CaseSummaryScreen/[caseUid]"
          options={{
            headerTitle: props => <HeaderImage />,
          }}
        />
        <Stack.Screen
          name="EligibilityForm/[caseUid]"
          options={{
            headerTitle: props => <HeaderImage />,
          }}
        />
        <Stack.Screen
          name="EligibilityForm/ConfirmIneligibility/[caseUid]"
          options={{
            headerTitle: props => <HeaderImage />,
          }}
        />
        <Stack.Screen
          name="Forms/[caseUid]"
          options={{
            headerTitle: props => <HeaderImage />,
          }}
        />
        <Stack.Screen
          name="Forms/FormView/index"
          options={{
            headerTitle: props => <HeaderImage />,
          }}
        />
        <Stack.Screen
          name="Updates/[caseUid]"
          options={{
            headerTitle: props => <HeaderImage />,
          }}
        />
        <Stack.Screen
          name="Updates/UpdateView/[updateUid]"
          options={{
            headerTitle: props => <HeaderImage />,
          }}
        />
        <Stack.Screen
          name="OptOut/[caseUid]"
          options={{
            headerTitle: props => <HeaderImage />,
          }}
        />
        <Stack.Screen
          name="OptOut/ConfirmOptOut/[caseUid]"
          options={{
            headerTitle: props => <HeaderImage />,
          }}
        />
      </Stack>
    </CaseContextProvider>
  );
}
