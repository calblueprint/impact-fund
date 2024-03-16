import { router, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function ResetConfirm() {
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const errorExists = false;
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.instructionText}>
            Are you sure you want to reset the password associated with the
            email {email}?
          </Text>
        </View>
        <TouchableOpacity
          disabled={errorExists}
          style={
            errorExists
              ? [styles.nextButtonBase, styles.nextButtonDisabled]
              : [styles.nextButtonBase, styles.nextButtonActive]
          }
          onPress={() => console.log('hello')}
        />
      </View>
    </View>
  );
}
