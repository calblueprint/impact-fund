import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import RedInformationIcon from '../../../assets/red-information-icon.svg';
import RightCarrot from '../../../assets/right-caret.svg';
import { openUrl } from '../../app/(BottomTabNavigation)/AllCases/utils';

export default function EducationalBar() {
  return (
    <TouchableOpacity onPress={() => openUrl('https://www.impactfund.org/')}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <RedInformationIcon />
        </View>
        <Text style={styles.messageText}>Learn More About Class Actions</Text>
        <View style={styles.iconContainer}>
          <RightCarrot />
        </View>
      </View>
    </TouchableOpacity>
  );
}
