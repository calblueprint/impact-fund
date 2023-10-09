import React from 'react';
import { Text, View } from 'react-native';
import StyledButton from '../../../components/StyledButton';
import styles from './styles';

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.everythingContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>
            Welcome to Impact Fund! Log in or create an account to get started.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton text="LOG IN" file="/(Authentication)/Login" />
          <StyledButton text="CREATE ACCOUNT" file="/(Authentication)/SignUp" />
        </View>
      </View>
    </View>
  );
}

export default WelcomeScreen;
