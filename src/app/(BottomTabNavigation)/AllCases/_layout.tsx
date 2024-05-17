import { Stack } from 'expo-router';
import React from 'react';

import {
  BackButtonNoText,
  BackButtonText,
} from '../../../components/BackButtons/BackButtons';
import {
  LeftAlignedHeaderLine,
  HeaderImage,
  EmptyHeader,
} from '../../../components/HeaderComponents/HeaderComponents';

export default function CasesLayout() {
  return (
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
          headerTitle: () => <LeftAlignedHeaderLine />,
        }}
      />
      <Stack.Screen
        name="CaseScreen/[caseUid]"
        options={{
          headerLeft: () => <BackButtonText backText="Cases" />,
          headerTitle: () => <HeaderImage />,
        }}
      />
      <Stack.Screen
        name="CaseSummaryScreen/[caseUid]"
        options={{
          headerLeft: () => <BackButtonNoText />,
          headerTitle: () => <HeaderImage />,
        }}
      />
      <Stack.Screen
        name="EligibilityForm/[caseUid]"
        options={{
          headerLeft: () => <BackButtonText backText="Case" />,
          headerTitle: () => <HeaderImage />,
        }}
      />
      <Stack.Screen
        name="EligibilityForm/ConfirmIneligibility/[caseUid]"
        options={{
          headerLeft: () => <BackButtonNoText />,
          headerTitle: () => <HeaderImage />,
        }}
      />
      <Stack.Screen
        name="FileClaim/[caseUid]"
        options={{
          headerLeft: () => <BackButtonNoText />,
          headerTitle: () => <HeaderImage />,
        }}
      />
      <Stack.Screen
        name="Forms/[caseUid]"
        options={{
          headerLeft: () => <BackButtonNoText />,
          headerTitle: () => <HeaderImage />,
        }}
      />
      <Stack.Screen
        name="Forms/FormView/index"
        options={{
          headerLeft: () => <BackButtonNoText />,
          headerTitle: () => <HeaderImage />,
        }}
      />
      <Stack.Screen
        name="Updates/[caseUid]"
        options={{
          headerLeft: () => <BackButtonText backText="Case" />,
          headerTitle: () => <EmptyHeader />,
        }}
      />
      <Stack.Screen
        name="Updates/UpdateView/[updateUid]"
        options={{
          headerLeft: () => <BackButtonText backText="All Updates" />,
          headerTitle: () => <EmptyHeader />,
        }}
      />
      <Stack.Screen
        name="OptOut/[caseUid]"
        options={{
          headerLeft: () => <BackButtonNoText />,
          headerTitle: () => <EmptyHeader />,
        }}
      />
      <Stack.Screen
        name="OptOut/ConfirmOptOut/[caseUid]"
        options={{
          headerLeft: () => <BackButtonNoText />,
          headerTitle: () => <EmptyHeader />,
        }}
      />
    </Stack>
  );
}
