import { Link } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

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
        <TouchableOpacity>
          <Text
            style={[color === 'white' ? styles.blackText : styles.whiteText]}
          >
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={[color === 'white' ? styles.whiteButton : styles.blackButton]}>
      <Link href={file} asChild>
        <TouchableOpacity>
          <Text
            style={[[color === 'white' ? styles.blackText : styles.whiteText]]}
          >
            {text}
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

export default StyledButton;
