import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import ShowBottomNav from '../../../Components/ShowBottomNav/ShowBottomNav';

function ProfileScreen() {
  ShowBottomNav();
  return (
    <View style={styles.container}>
      <Text>This is the /Updates/index update screen!</Text>
    </View>
  );
}

export default ProfileScreen;
