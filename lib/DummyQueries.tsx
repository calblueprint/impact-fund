import { Button } from 'react-native-elements';
import { supabase } from './supabase';

export default function DummyQueries() {
  async function allCases() {
    const { data, error } = await supabase.from('Cases').select();
  }
  async function approvedCases() {
    const { data, error } = await supabase
      .from('Cases')
      .select()
      .filter('approved', 'is', 'True');
  }
  async function unapprovedCases() {
    const { data, error } = await supabase
      .from('Cases')
      .select()
      .filter('approved', 'is', 'False');
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
  }

  return <Button title="Get Case Data" onPress={() => addCase()} />;
}
