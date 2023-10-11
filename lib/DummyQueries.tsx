import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import supabase from './supabase';

export default function DummyQueries() {
  let queryHolder;

  async function allCases() {
    const { data, error } = await supabase.from('Cases').select();
    queryHolder = data;
    queryHolder = error;
  }
  async function approvedCases() {
    const { data, error } = await supabase
      .from('Cases')
      .select()
      .filter('approved', 'is', 'True');
    queryHolder = data;
    queryHolder = error;
  }
  async function unapprovedCases() {
    const { data, error } = await supabase
      .from('Cases')
      .select()
      .filter('approved', 'is', 'False');
    queryHolder = data;
    queryHolder = error;
  }
  async function addCase() {
    const dummyCase = {
      approved: false,
      title: 'Dummy Case',
      summary: 'Testing intializing db',
      image: 'no.jpg',
      case_status: 'In Progress',
      claim_link: 'berkeley.edu',
      case_site: 'berkeley.edu',
      opt_out_link: 'berkeley.edu',
    };
    const { error } = await supabase.from('Cases').insert(dummyCase);
    queryHolder = error;
  }

  return (
    <View>
      <Button title="Get Case Data" onPress={() => allCases()} />
      <Button title="Get Case Data" onPress={() => approvedCases()} />
      <Button title="Get Case Data" onPress={() => unapprovedCases()} />
      <Button title="Get Case Data" onPress={() => addCase()} />
      <Text>{queryHolder ? '' : queryHolder}</Text>
    </View>
  );
}
