import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../types/types';
import styles from './styles';

type CasesScreenProps = NativeStackScreenProps<RootStackParamList, 'Cases'>;

function CasesScreen({ navigation }: CasesScreenProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Welcome')}
        style={styles.button}
      >
        <Text>Welcome</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('QRCodeScanner')}
        style={styles.button}
      >
        <Text>QR Code Scanner</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Updates')}
        style={styles.button}
      >
        <Text>Updates</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={styles.button}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CasesScreen;
