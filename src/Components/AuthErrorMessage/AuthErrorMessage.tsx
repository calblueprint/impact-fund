import { View, Text } from 'react-native';

import styles from './styles';

interface AuthErrorMessageProps {
  message: string | null;
}

export default function AuthErrorMessage({ message }: AuthErrorMessageProps) {
  return (
    <View style={styles.errorMessageBox}>
      <Text style={styles.errorMessageText}>{message}</Text>
    </View>
  );
}
