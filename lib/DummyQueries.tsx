import { Button } from 'react-native-elements';
import { supabase } from './supabase';

export default function DummyQueries() {
  async function testQueries() {
    const { data, error } = await supabase.from('Cases').select();

    console.log('data', data);
    console.log('error', error);
  }
  return <Button title="Get Case Data" onPress={() => testQueries()} />;
}
