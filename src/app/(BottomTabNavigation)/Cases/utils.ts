import {
  getCaseIdsFromUserId,
  getCasesByIds,
} from '../../../supabase/queries/cases';
import { Case, UserUid } from '../../../types/types';

export default async function fetchListViewCases(
  userUid: UserUid,
): Promise<Case[]> {
  try {
    if (!userUid) {
      throw new Error(`Invalid user uid: ${userUid}`);
    }
    const caseIds = await getCaseIdsFromUserId(userUid);
    const caseData = await getCasesByIds(caseIds);

    return caseData;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(fetchListViewCases)', error);
    throw error;
  }
}

/**
 * Formats date object according to a specified format.
 * @param dateObject
 * @returns readable date string
 */
export function formatDate(dateObject: Date) {
  const date = new Date(dateObject).toDateString().split(' ');
  return `${date[1]} ${date[2]}, ${date[3]}`;
}
