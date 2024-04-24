import { router } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import CircleBackButton from '../../../assets/grey-circle-back-arrow.svg';
import BackArrow from '../../../assets/red-left-caret.svg';

interface backButtonProps {
  backText: string;
}

export function BackButtonText({ backText }: backButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={styles.backButtonContainer}
    >
      <BackArrow />
      <Text style={styles.headerText}>{backText}</Text>
    </TouchableOpacity>
  );
}

export function BackButtonNoText() {
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <CircleBackButton />
    </TouchableOpacity>
  );
}
