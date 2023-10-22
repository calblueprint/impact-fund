import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

type ExternalLinkProps = {
  text: string;
  url: string;
};

export default function ExternalSiteLink({ text, url }: ExternalLinkProps) {
  /**
   * Routes user to the given url. Returns a Promise object:
   * - If the user confirms the open dialog or the url automatically opens, the promise is resolved.
   * - If the user cancels the open dialog or there are no registered applications for the url, the promise is rejected
   */
  async function openUrl() {
    const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
    if (supported) {
      console.log(`routing user to: ${url}`);
      await Linking.openURL(url); // It will open the URL on browser.
    }
  }

  return (
    <TouchableOpacity onPress={() => openUrl()}>
      <View style={styles.container}>
        <IonIcon name="information-circle-outline" size={25} />
        <Text style={styles.messageText}>{text}</Text>
        <MaterialIcon name="keyboard-arrow-right" size={25} />
      </View>
    </TouchableOpacity>
  );
}
