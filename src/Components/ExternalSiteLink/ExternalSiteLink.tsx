import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import InformationIcon from '../../../assets/information-icon.svg';
import RightCaret from '../../../assets/right-caret.svg';
import { openUrl } from '../../app/(BottomTabNavigation)/AllCases/utils';
import { fonts } from '../../styles/fonts';
import { ButtonWhite } from '../AuthButton/AuthButton';

type ExternalLinkProps = {
  text: string;
  url: string;
};

export default function ExternalSiteLink({ text, url }: ExternalLinkProps) {
  return (
    <ButtonWhite onPress={() => openUrl(url)} style={styles.buttonContainer}>
      <View style={styles.iconContainer}>
        <InformationIcon />
      </View>
      <Text style={fonts.blackButton}>{text}</Text>
      <View style={styles.iconContainer}>
        <RightCaret />
      </View>
    </ButtonWhite>
  );
}
