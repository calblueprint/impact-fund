import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import ShareButton from '../../../assets/red-share-button.svg';

export const CasesHeader = () => {
  return (
    <Image
      source={require('../../../assets/inline-logo.jpeg')}
      style={{ width: 120, height: 15 }}
    />
  );
};

export const AllCasesHeader = () => {
  return (
    <View style={styles.allCasesBorder}>
      <CasesHeader />
    </View>
  );
};

export const ShareIcon = () => {
  return (
    <TouchableOpacity style={styles.backButtonContainer}>
      <Text style={styles.headerText}>Share</Text>
      <ShareButton />
    </TouchableOpacity>
  );
};
