import { Link } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import RightArrowWhite from '../../../assets/right-arrow-white.svg';
import RightArrow from '../../../assets/right-arrow.svg';

function StyledButton({
  text,
  file,
  color,
}: {
  text: string;
  file: string;
  color: string;
}) {
  if (file === '') {
    return (
      <View
        style={[color === 'white' ? styles.whiteButton : styles.blackButton]}
      >
        <TouchableOpacity style={styles.buttonContainer}>
          <Text
            style={[color === 'white' ? styles.blackText : styles.whiteText]}
          >
            {text}
          </Text>
          <View style={styles.arrow}>
            <RightArrow />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={[color === 'white' ? styles.whiteButton : styles.blackButton]}>
      <Link href={file} asChild>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text
            style={[[color === 'white' ? styles.blackText : styles.whiteText]]}
          >
            {text}
          </Text>
          <View
            style={[[color === 'white' ? styles.arrow : styles.arrowWhite]]}
          >
            {color === 'white' ? <RightArrow /> : <RightArrowWhite />}
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

export default StyledButton;
