import { CaseUid, EligibilityRequirement } from '../../types/types';
import supabase from '../createClient';

/**
 * Fetch eligibility requirements matching a specific `caseUid`.
 *
 * @param caseUid target case to fetch requirements for.
 * @return array of `EligibilityRequirement` objects.
 * */
export async function getRequirementsByCaseUid(
  caseUid: CaseUid,
): Promise<EligibilityRequirement[]> {
  try {
    const { data } = await supabase
      .from('eligibility')
      .select()
      .eq('case_id', caseUid);
    if (!data) {
      throw new Error('requirements not found');
    }
    return await Promise.all(
      data.map(async queryItem => {
        return formatEligibility(caseUid, queryItem);
      }),
    );
  } catch (error) {
    console.warn('(getCaseById)', error);
    throw error;
  }
}

/**
 * Place query data into an `EligibilityRequirement` object.
 */
export function formatEligibility(
  caseUid: CaseUid,
  queryItem: any,
): EligibilityRequirement {
  try {
    // organize form MetaData without publicUrl
    const requirement: EligibilityRequirement = {
      eligibilityUid: queryItem.eligibility_id,
      caseUid,
      requirement: queryItem.requirement,
    };
    return requirement;
  } catch (error) {
    throw error;
  }
}
