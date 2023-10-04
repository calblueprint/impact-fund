import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the welcome screen!</Text>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;
