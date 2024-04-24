import { Stack } from 'expo-router';
import React from 'react';

import { LeftAlignedHeaderLine } from '../../../Components/HeaderComponents/HeaderComponents';

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
    </Stack>
  );
}
