import { Stack } from 'expo-router';

import { HeaderImage } from '../../../Components/HeaderComponents/HeaderComponents';

export default function QRCodeScannerLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => <HeaderImage />,
        }}
      />
    </Stack>
  );
}
