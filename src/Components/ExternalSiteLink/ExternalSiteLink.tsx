import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';
import InformationIcon from '../../../assets/information-icon.svg';
import RightCarrot from '../../../assets/right-carrot.svg';
import { openUrl } from '../../app/(BottomTabNavigation)/AllCases/utils';

type ExternalLinkProps = {
  text: string;
  url: string;
};

export default function ExternalSiteLink({ text, url }: ExternalLinkProps) {
  // /**
  //  * Routes user to the given url. Returns a Promise object:
  //  * - If the user confirms the open dialog or the url automatically opens, the promise is resolved.
  //  * - If the user cancels the open dialog or there are no registered applications for the url, the promise is rejected
  //  */
  // async function openUrl() {
  //   const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
  //   if (supported) {
  //     console.log(`routing user to: ${url}`);
  //     await Linking.openURL(url); // It will open the URL on browser.
  //   }
  // }

  return (
    <TouchableOpacity onPress={() => openUrl(url)}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <InformationIcon />
        </View>
        <Text style={styles.messageText}>{text}</Text>
        <View style={styles.iconContainer}>
          <RightCarrot />
        </View>
      </View>
    </TouchableOpacity>
  );
}
