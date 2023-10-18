import {
  CaseCardProps,
  CaseId,
  UserUid,
} from '../../app/(BottomTabNavigation)/Cases/types';
import supabase from '../createClient';

/**
 * Fetch an array of `CaseId`s associated with a specific user. Fetches ids from `status` table.
 *
 * @param userId user Uuid
 * @returns array of `CaseId`s
 */
export async function getCaseIdsFromUserId(userId: UserUid): Promise<CaseId[]> {
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
    return data.map(item => item.caseId as CaseId);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(getCaseIdsFromUserId)', error);
    throw error;
  }
}

/**
 * Fetch an array of Case objects contained in an array of `CaseId`s. Fetches cases from `cases` table.
 *
 * @param caseIds list of `CaseId`s
 * @returns array of `CaseCard` objects
 */
export async function getCasesByIds(
  caseIds: CaseId[],
): Promise<CaseCardProps[]> {
  try {
    // query cases contained in a list of caseIds
    const { data } = await supabase
      .from('Cases')
      .select('id, title, image, caseStatus')
      .in('id', caseIds);

    // throw error if supabase data is empty
    if (!data) {
      throw new Error('no cases found');
    }

    // cast raw sql data as CaseCardProps data type
    return data.map(item => {
      const formattedCase: CaseCardProps = {
        id: item.id,
        title: item.title,
        status: item.caseStatus,
        imageUrl: item.image,
      };
      return formattedCase;
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(getCasesByIds)', error);
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
