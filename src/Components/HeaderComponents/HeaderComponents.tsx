import { router } from 'expo-router';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import BackArrow from '../../../assets/red-left-caret.svg';
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
    <View>
      <View style={styles.allCasesBorder}>
        <CasesHeader />
      </View>
    </View>
  );
};

interface backButtonProps {
  backText: string;
}
export const BackButton = ({ backText }: backButtonProps) => {
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <View style={styles.backButtonContainer}>
        <View style={styles.tenPixelsRightPadding}>
          <BackArrow />
        </View>
        <View>
          <Text style={styles.headerText}>{backText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export const ShareIcon = () => {
  return (
    <TouchableOpacity>
      <View style={styles.backButtonContainer}>
        <View style={styles.tenPixelsRightPadding}>
          <Text style={styles.headerText}>Share</Text>
        </View>
        <View>
          <ShareButton />
        </View>
      </View>
    </TouchableOpacity>
  );
};
