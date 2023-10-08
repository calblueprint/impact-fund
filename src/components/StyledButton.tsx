import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function StyledButton({ text }: { text: string }) {
  return (
    <TouchableOpacity style={[styles.buttonContainer]} activeOpacity={0.7}>
      <Text style={[styles.buttonText]}>{text}</Text>
    </TouchableOpacity>
  );
}

export default StyledButton;
