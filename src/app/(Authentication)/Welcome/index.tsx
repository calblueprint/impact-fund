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
import { SafeArea } from '../../../styles/global';

function WelcomeScreen() {
  return (
    <SafeArea>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.welcomeText}>Welcome to the Impact Fund.</Text>

          <View style={styles.buttonContainer}>
            <ButtonWhite
              style={styles.baseButton}
              onPress={() => router.push('/SignUp/Email')}
            >
              <Text style={styles.nextTextBlack}>Create an account</Text>
              <RightArrow />
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
              <RightArrowWhite />
            </ButtonBlack>
          </View>
        </View>
      </View>
    </SafeArea>
  );
}

export default WelcomeScreen;
