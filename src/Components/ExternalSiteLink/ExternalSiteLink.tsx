import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import InformationIcon from '../../../assets/information-icon.svg';
import RightCaret from '../../../assets/right-caret.svg';
import { openUrl } from '../../app/(BottomTabNavigation)/AllCases/utils';

type ExternalLinkProps = {
  text: string;
  url: string;
};

export default function ExternalSiteLink({ text, url }: ExternalLinkProps) {
  return (
    <TouchableOpacity onPress={() => openUrl(url)}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <InformationIcon />
        </View>
        <Text style={styles.messageText}>{text}</Text>
        <View style={styles.iconContainer}>
          <RightCaret />
        </View>
      </View>
    </TouchableOpacity>
  );
}
