import { CaseUid } from '../../types/types';
import supabase from '../createClient';

// Fetch eligibility requirements using a caseID
export async function getReqsById(caseId: CaseUid): Promise<any> {
  try {
    const { data: eligibility, error } = await supabase
      .from('eligibility')
      .select('requirement');

    if (!eligibility) {
      throw new Error('requirements not found');
    }
    return eligibility.map(item => item.requirement);
    // const elig = {
    //   id: caseId,
    //   requirements: eligibility.map(item => item.requirement),
    // };
    // return elig;
  } catch (error) {
    console.warn('(getCaseById)', error);
    throw error;
  }
}
