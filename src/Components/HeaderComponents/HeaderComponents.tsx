import { router } from 'expo-router';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import BackArrow from '../../../assets/red-left-caret.svg';
import ShareButton from '../../../assets/red-share-button.svg';
import { colors } from '../../styles/colors';

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
interface backButtonProps {
  backText: string;
}
export const BackButton = ({ backText }: backButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={styles.backButtonContainer}
    >
      <BackArrow />
      <Text style={styles.headerText}>{backText}</Text>
    </TouchableOpacity>
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

interface TabBarItemProps {
  icon: React.ReactNode;
  label: string;
  focused: boolean;
}

//Inline styling required --> can't make a styles.ts in this directory otherwise it'll make a new bottom tab idk why
export const TabBarItem = ({ icon, label, focused }: TabBarItemProps) => (
  <View
    style={{
      backgroundColor: focused ? colors.lightRed : 'transparent',
      borderRadius: 10,
      height: 55,
      width: 66,
      marginTop: 10,
    }}
  >
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
      }}
    >
      {icon}
      <Text
        style={{
          fontSize: 9,
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 21,
          color: focused ? colors.midRed : colors.midGrey,
        }}
      >
        {label}
      </Text>
    </View>
  </View>
);
