import { Link } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { signOutUser } from '../../../supabase/queries/auth';

function CasesScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the cases screen!</Text>
      <Link href="/Cases/QRCodeScanner" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>QR Code Scanner</Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity onPress={() => signOutUser()} style={styles.button}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CasesScreen;
