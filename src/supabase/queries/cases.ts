import { Case, CaseUid, UserUid } from '../../types/types';
import supabase from '../createClient';

/**
 * Fetch an array of `CaseId`s associated with a specific user. Fetches ids from `status` table.
 *
 * @param userId user Uuid
 * @returns array of `CaseId`s
 */
export async function getCaseIdsFromUserId(
  userId: UserUid,
): Promise<CaseUid[]> {
  try {
    // fetch caseIds that match the specified userId
    const { data } = await supabase
      .from('status')
      .select('caseId')
      .eq('userId', userId);

    // throw error if supabase data is empty
    if (!data) {
      throw new Error(`no caseIds found for the given user: ${userId}`);
    }

    // cast raw sql data as an array of CaseIds
    return data.map(item => item.caseId as CaseUid);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(getCaseIdsFromUserId)', error);
    throw error;
  }
}

export async function getCaseById(caseId: CaseUid): Promise<Case> {
  try {
    const { data } = await supabase.from('Cases').select().eq('id', caseId);
    if (!data) {
      throw new Error('case not found');
    }
    return parseCase(data[0]);
  } catch (error) {
    console.warn('(getCaseById)', error);
    throw error;
  }
}

/**
 * Fetch an array of Case objects contained in an array of `CaseId`s. Fetches cases from `cases` table.
 *
 * @param caseIds list of `CaseId`s
 * @returns array of `CaseCard` objects
 */
export async function getCasesByIds(caseIds: CaseUid[]): Promise<Case[]> {
  try {
    // query cases contained in a list of caseIds
    const { data } = await supabase.from('Cases').select().in('id', caseIds);

    // throw error if supabase data is empty
    if (!data) {
      throw new Error('no cases found');
    }

    // cast raw sql data as CaseCardProps data type
    return data.map(item => parseCase(item));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(getCasesByIds)', error);
    throw error;
  }
}

/**
 * Parse supabase case query and return Case object.
 *
 * @param item Case query result
 * @returns `Case` object
 */
function parseCase(item: any): Case {
  const formattedCase: Case = {
    id: item.id,
    approved: item.approved,
    title: item.title,
    summary: item.summary,
    image: item.image,
    caseSite: item.caseSite,
    classClaimLink: item.classClaimLink,
    individualClaimLink: item.individualClaimLink,
    caseStatus: item.caseStatus,
  };
  return formattedCase;
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
