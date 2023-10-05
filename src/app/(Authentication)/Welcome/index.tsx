import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

function WelcomeScreen() {
  return (
    <View style={styles.everythingContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>
          Welcome to Impact Fund! Log in or create an account to get started.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton text="LOG IN" />
        <StyledButton text="CREATE ACCOUNT" />
      </View>
    </View>
  );
}

export default WelcomeScreen;
