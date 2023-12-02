import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import StyledButton from '../../../Components/StyledButton/StyledButton';

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>
          Welcome to Impact Fund! Log in or create an account to get started.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton text="LOG IN" file="/Login/Email" />
        <StyledButton text="CREATE ACCOUNT" file="/SignUp/Email" />
      </View>
    </View>
  );
}

export default WelcomeScreen;
