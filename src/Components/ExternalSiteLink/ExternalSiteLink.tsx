import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

type ExternalLinkProps = {
  text: string;
  url: string;
};

export default function ExternalSiteLink({ text, url }: ExternalLinkProps) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <IonIcon name="information-circle-outline" size={25} />
        <Text style={styles.messageText}>{text}</Text>
        <MaterialIcon name="keyboard-arrow-right" size={25} />
      </View>
    </TouchableOpacity>
  );
}
