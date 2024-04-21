import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import GreyLine from '../../../../assets/grey-line.svg';
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

          <View style={styles.orLine}>
            <GreyLine style={{ margin: 5 }} />
            <Text style={styles.orStyle}>OR</Text>
            <GreyLine style={{ margin: 5 }} />
          </View>
          <ButtonBlack
            style={styles.baseButton}
            onPress={() => router.push('/SignUp/Email')}
          >
            <Text style={styles.nextText}>Log in with email</Text>
            <RightArrowWhite style={{ marginRight: 10 }} />
          </ButtonBlack>
        </View>
      </View>
    </View>
  );
}

export default WelcomeScreen;
