import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import StyledButton from '../../../Components/StyledButton/StyledButton';

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Impact Fund!</Text>
      <View style={styles.buttonContainer}>
        <StyledButton text="Create an account" file="/SignUp" color="white" />
        <StyledButton text="Log in with email" file="/Login" color="black" />
      </View>
    </View>
  );
}

export default WelcomeScreen;
