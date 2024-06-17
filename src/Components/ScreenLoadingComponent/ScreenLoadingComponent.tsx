import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { colors } from '../../styles/colors';

export default function ScreenLoadingComponent() {
  const [timeoutExists, setTimeoutExists] = useState<boolean>(false);

  useEffect(() => {
    console.log('timeout useeffect begins');
    setTimeout(() => {
      setTimeoutExists(true);
    }, 5000);
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
      <ActivityIndicator size="small" color={colors.midRed} />
      {timeoutExists && (
        <View>
          <Text>This is taking a while...</Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text>Press Here to Navigate back to the home screen</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
