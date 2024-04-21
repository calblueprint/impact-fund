import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import RightArrowWhite from '../../../../assets/right-arrow-white.svg';
import RightArrow from '../../../../assets/right-arrow.svg';
import {
  ButtonBlack,
  ButtonWhite,
} from '../../../Components/AuthButton/AuthButton';

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={require('../../../../assets/inline-logo.jpeg')}
        />

        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome to the Impact Fund.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonWhite
            style={styles.baseButton}
            onPress={() => router.push('/SignUp/Email')}
          >
            <Text style={styles.nextTextBlack}>Create an account</Text>
            <RightArrow style={{ marginRight: 10 }} />
          </ButtonWhite>

          <View style={styles.orContainer}>
            <View style={styles.horizontalLine} />
            <Text style={styles.orTextContainer}> OR </Text>
            <View style={styles.horizontalLine} />
          </View>
          <ButtonBlack
            style={styles.baseButton}
            onPress={() => router.push('/Login/Email')}
          >
            <Text style={styles.nextTextWhite}>Log in with email</Text>
            <RightArrowWhite style={{ marginRight: 10 }} />
          </ButtonBlack>
        </View>
      </View>
    </View>
  );
}

export default WelcomeScreen;
