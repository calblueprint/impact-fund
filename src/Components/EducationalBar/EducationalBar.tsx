import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import RedInformationIcon from '../../../assets/red-information-icon.svg';
import RightCarrot from '../../../assets/right-caret.svg';
import { openUrl } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { fonts } from '../../styles/fonts';
import { shawdowStyles } from '../../styles/global';

export default function EducationalBar() {
  return (
    <View style={[styles.container, shawdowStyles.shadowBorder]}>
      <TouchableOpacity
        onPress={() => openUrl('https://www.impactfund.org/')}
        style={styles.button}
      >
        <View style={styles.iconContainer}>
          <RedInformationIcon />
        </View>
        <Text style={fonts.body}>Learn More About Class Actions</Text>
        <View style={styles.iconContainer}>
          <RightCarrot />
        </View>
      </TouchableOpacity>
    </View>
  );
}
