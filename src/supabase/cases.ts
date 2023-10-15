import { CaseId, UserUid } from '../app/(BottomTabNavigation)/Cases/types';
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

export async function getCasesByIds(caseIds: CaseId[]) {
  try {
    // query cases that match a list of ids
    const { data } = await supabase.from('Cases').select().in('id', caseIds);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error querying database');
    throw error;
  }
}

export async function getCaseIdsFromUserId(userId: UserUid): Promise<CaseId[]> {
  try {
    // query cases that match a list of ids
    const { data } = await supabase
      .from('status')
      .select('caseId')
      .eq('userId', userId);

    if (!data) {
      throw new Error();
    }

    return data.map(item => item.caseId as CaseId);
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
