import supabase from './supabase';

export async function allCases() {
  const { data } = await supabase.from('Cases').select();
  return data;
}

export async function addCase() {
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
  return error;
}
