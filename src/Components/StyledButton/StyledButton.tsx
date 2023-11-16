import { Link } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

function StyledButton({ text, file }: { text: string; file: string }) {
  if (file === '') {
    return (
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity>
          <Text style={[styles.buttonText]}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={[styles.buttonContainer]}>
      <Link href={file} asChild>
        <TouchableOpacity>
          <Text style={[styles.buttonText]}>{text}</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

export default StyledButton;
