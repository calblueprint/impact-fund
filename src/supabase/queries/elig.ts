import { CaseUid, EligibilityRequirement } from '../../types/types';
import supabase from '../createClient';

// Fetch eligibility requirements using a caseID
export async function getReqsById(
  caseId: CaseUid,
): Promise<EligibilityRequirement> {
  try {
    const { data } = await supabase
      .from('elibility')
      .select('id, reqs')
      .eq('caseId', caseId)
      .single();
    if (!data) {
      throw new Error('requirements not found');
    }
    const eligReqs: EligibilityRequirement = {
      id: data.id,
      reqs: data.reqs,
    };
    return eligReqs;
  } catch (error) {
    console.warn('(getCaseById)', error);
    throw error;
  }
}
