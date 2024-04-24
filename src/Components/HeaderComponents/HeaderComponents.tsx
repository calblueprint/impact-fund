import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import ShareButton from '../../../assets/red-share-button.svg';

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
    <View style={styles.allCasesBorder}>
      <HeaderImage />
    </View>
  );
}

export function LeftAlignedHeaderLine() {
  return (
    <View style={[styles.allCasesBorder, styles.bottomLine]}>
      <HeaderImage />
    </View>
  );
}

export function BlankHeader() {
  return <View />;
}
