import { CaseUid, EligibilityRequirement } from '../../types/types';
import supabase from '../createClient';

// Fetch eligibility requirements using a caseID
export async function getReqsById(
  caseId: CaseUid,
): Promise<EligibilityRequirement[]> {
  try {
    const { data } = await supabase.from('eligibility').select();

    if (!data) {
      throw new Error('requirements not found');
    }
    //return await formatForm(caseUid,  eligibility.map(item => item.requirement));
    return await Promise.all(
      data.map(async queryItem => {
        return await formatEligibility(caseId, queryItem);
      }),
    );
  } catch (error) {
    console.warn('(getCaseById)', error);
    throw error;
  }
}

export async function formatEligibility(
  CaseUid: CaseUid,
  queryItem: any,
): Promise<EligibilityRequirement> {
  try {
    // organize form MetaData without publicUrl
    const eligs: EligibilityRequirement = {
      eligUid: queryItem.eligibility_id,
      caseId: CaseUid,
      requirements: queryItem.requirement,
      //checked: false,
    };
    return eligs;
  } catch (error) {
    throw error;
  }
}
