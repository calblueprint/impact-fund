import { Stack } from 'expo-router';

import { BackButtonNoText } from '../../../Components/BackButtons/BackButtons';
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
      <Stack.Screen
        name="AddCase/[caseUid]"
        options={{
          headerLeft: () => <BackButtonNoText />,
          headerTitle: () => <HeaderImage />,
        }}
      />
    </Stack>
  );
}
