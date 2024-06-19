import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import styles from './styles';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export default function ScreenLoadingComponent() {
  const [loadingPromptExists, setLoadingPromptExists] =
    useState<boolean>(false);
  const [timeoutReached, setTimeoutReached] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPromptExists(true);
      setTimeout(() => {
        setTimeoutReached(true);
      }, 10000);
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={colors.midRed} />
      {loadingPromptExists && (
        <View>
          {!timeoutReached ? (
            <Text style={fonts.body}>This is taking longer than usual...</Text>
          ) : (
            <Text style={fonts.body}>
              There seems to be an issue connecting with Impact Fund servers...{' '}
              {'\n'}
              {'\n'}
              Please check your internet connection or try again later.
            </Text>
          )}
        </View>
      )}
    </View>
  );
}
