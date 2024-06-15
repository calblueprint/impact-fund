import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { colors } from '../../styles/colors';

export default function ScreenLoadingComponent() {
  return (
    <View style={{ marginTop: 20 }}>
      <ActivityIndicator size="small" color={colors.midRed} />
    </View>
  );
}
