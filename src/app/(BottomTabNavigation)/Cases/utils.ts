import { getCaseIdsFromUserId, getCasesByIds } from '../../../supabase/cases';
import { CaseCardProps, UserUid } from './types';

export default async function fetchListViewCases(
  userUid: UserUid,
): Promise<CaseCardProps[]> {
  try {
    if (!userUid) {
      throw new Error(`Invalid user uid: ${userUid}`);
    }

    const caseIds = await getCaseIdsFromUserId(userUid);
    const caseData = await getCasesByIds(caseIds);
    // eslint-disable-next-line no-console
    console.log(caseData);
    return caseData;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(fetchListViewCases)', error);
    throw error;
  }
}
