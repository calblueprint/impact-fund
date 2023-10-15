import supabase from './createClient';

export async function allCases() {
  try {
    const { data } = await supabase.from('Cases').select();
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error querying database');
    throw error;
  }
}

export async function getCaseByCaseId(caseId: number) {
  try {
    const { data } = await supabase.from('Cases').select().eq('id', caseId);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error querying database');
    throw error;
  }
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
