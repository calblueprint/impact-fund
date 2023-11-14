import React from 'react';
import { Image } from 'react-native';

export default function CasesHeader() {
  return (
    <Image
      source={require('../../../assets/inline-logo.jpeg')}
      style={{ width: 120, height: 15 }}
    />
  );
}
