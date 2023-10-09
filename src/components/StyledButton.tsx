import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function StyledButton({ text, file }: { text: string; file: string }) {
  return (
    <Link href={file} asChild>
      <Pressable>
        <TouchableOpacity style={[styles.buttonContainer]} activeOpacity={0.7}>
          <Text style={[styles.buttonText]}>{text}</Text>
        </TouchableOpacity>
      </Pressable>
    </Link>
  );
}

export default StyledButton;
