import { Image } from 'expo-image';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import StyledButton from '../../../Components/StyledButton/StyledButton';

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome to the Impact Fund!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton
            text="Create an account"
            file="/SignUp/Email"
            color="white"
          />
          <StyledButton
            text="Log in with email"
            file="/Login/Email"
            color="black"
          />
        </View>
      </View>
    </View>
  );
}

export default WelcomeScreen;
