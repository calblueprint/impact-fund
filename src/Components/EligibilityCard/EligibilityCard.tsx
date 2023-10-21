import React from 'react';
import { View, Text } from 'react-native';

export default function EligibilityCard() {
  const eligible = false;
  return (
    <View>
      {eligible && <Text>EligibilityCar</Text>}
      {!eligible && (
        <Text>
          <Text>Not Eligible</Text>
          <Text>Opt out</Text>
        </Text>
      )}
    </View>
  );
}
