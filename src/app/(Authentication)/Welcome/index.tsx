import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import StyledButton from '../../../components/StyledButton';
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
        <StyledButton text="LOG IN" file="/Login" />
        <StyledButton text="CREATE ACCOUNT" file="/SignUp" />
      </View>
      <View style={styles.container}>
        <Text>This is the welcome screen!</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default WelcomeScreen;
