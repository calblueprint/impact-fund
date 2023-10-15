import { router } from 'expo-router';
import { useEffect } from 'react';

import supabase from '../supabase/createClient';

function StartScreen() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace('/Cases/QRCodeScanner');
      } else {
        router.replace('/Welcome');
      }
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.replace('/Cases/QRCodeScanner');
      } else {
        router.replace('Welcome');
      }
    });
  }, []);

  // return (
  //   <View style={styles.container}>
  //     <Link href="/Welcome" asChild>
  //       <TouchableOpacity style={styles.button}>
  //         <Text>Welcome Screen</Text>
  //       </TouchableOpacity>
  //     </Link>
  //     <Link href="/Cases/QRCodeScanner" asChild>
  //       <TouchableOpacity style={styles.button}>
  //         <Text>QR Code Scanner</Text>
  //       </TouchableOpacity>
  //     </Link>
  //     <Link href="/Cases" asChild>
  //       <TouchableOpacity style={styles.button}>
  //         <Text>Cases Screen</Text>
  //       </TouchableOpacity>
  //     </Link>
  //     <Link href="/Profile" asChild>
  //       <TouchableOpacity style={styles.button}>
  //         <Text>Profile Screen</Text>
  //       </TouchableOpacity>
  //     </Link>
  //     <Link href="/Updates" asChild>
  //       <TouchableOpacity style={styles.button}>
  //         <Text>Updates Screen</Text>
  //       </TouchableOpacity>
  //     </Link>
  //     <DummyQueries />
  //   </View>
  // );
}

export default StartScreen;
