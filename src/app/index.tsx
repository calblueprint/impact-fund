import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DummyQueries from '../../lib/DummyQueries';
import styles from './styles';

function StartScreen() {
  return (
    <View style={styles.container}>
      <Link href="/Welcome" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Welcome Screen</Text>
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
      <DummyQueries />
    </View>
  );
}

export default StartScreen;
