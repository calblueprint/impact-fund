import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../src/app/styles';
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
      <TouchableOpacity style={styles.button} onPress={() => allCases()}>
        <Text>Get All Cases</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => approvedCases()}>
        <Text>Get Approved Cases</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => unapprovedCases()}>
        <Text>Get Unapproved Cases</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => addCase()}>
        <Text>Add a Dummy Case</Text>
      </TouchableOpacity>
      <Text>{queryHolder ? '' : queryHolder}</Text>
    </View>
  );
}
