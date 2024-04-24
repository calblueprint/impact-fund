import { View, Image } from 'react-native';

import styles from './styles';

export function HeaderImage() {
  return (
    <Image
      source={require('../../../assets/inline-logo.jpeg')}
      style={{ width: 120, height: 15 }}
    />
  );
}

export function LeftAlignedHeader() {
  return (
    <View style={styles.fullHeaderContainer}>
      <HeaderImage />
    </View>
  );
}

export function LeftAlignedHeaderLine() {
  return (
    <View style={[styles.fullHeaderContainer, styles.bottomLine]}>
      <HeaderImage />
    </View>
  );
}

export function EmptyHeader() {
  return <View />;
}
