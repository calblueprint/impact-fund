import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { colors } from '../../styles/colors';

export default function LoadingComponent() {
  return (
    <View style={{ marginTop: 20 }}>
      <ActivityIndicator color={colors.midRed} />
    </View>
  );
}
