import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import DummyQueries from '../supabase/DummyQueries';
import styles from './styles';

function StartScreen() {
  return (
    <View style={styles.container}>
      <Link href="/Cases/QRCodeScanner" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>QR Code Scanner</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Cases" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Cases Screen</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Profile" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Profile Screen</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Updates" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Updates Screen</Text>
        </TouchableOpacity>
      </Link>
      <DummyQueries />
    </View>
  );
}

export default StartScreen;
