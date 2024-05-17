import { Stack } from 'expo-router';
import React from 'react';

import { BackButtonNoText } from '../../../components/BackButtons/BackButtons';
import {
  EmptyHeader,
  LeftAlignedHeader,
  LeftAlignedHeaderLine,
} from '../../../components/HeaderComponents/HeaderComponents';

export default function ProfileLayout() {
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
          headerTitle: props => <LeftAlignedHeaderLine />,
        }}
      />
      <Stack.Screen
        name="EditName/index"
        options={{
          headerLeft: () => <BackButtonNoText />,
          headerTitle: () => <EmptyHeader />,
        }}
      />
      <Stack.Screen
        name="EditAddress/index"
        options={{
          headerLeft: () => <BackButtonNoText />,
          headerTitle: () => <EmptyHeader />,
        }}
      />
      <Stack.Screen
        name="ResetConfirm/index"
        options={{
          headerLeft: () => <BackButtonNoText />,
          headerTitle: () => <EmptyHeader />,
        }}
      />
      <Stack.Screen
        name="DeleteAccount/index"
        options={{
          headerTitle: () => <LeftAlignedHeader />,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="LogOut/index"
        options={{
          headerTitle: () => <LeftAlignedHeader />,
          headerBackVisible: false,
        }}
      />
    </Stack>
  );
}
