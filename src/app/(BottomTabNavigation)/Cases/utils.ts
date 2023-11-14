import {
  getCaseIdsFromUserId,
  getCasesByIds,
} from '../../../supabase/queries/cases';
import { Case, UserUid } from '../../../types/types';

/**
 * Fetches all Cases associated with a specific `userUid` from supabase. Formats Case data and returns an array of `Case` objects.
 *
 * @param userUid uid of target user
 * @returns array of formatted `Case` objects
 */
export async function fetchAllCases(userUid: UserUid): Promise<Case[]> {
  try {
    if (!userUid) {
      throw new Error(`Invalid user uid: ${userUid}`);
    }

    const caseIds = await getCaseIdsFromUserId(userUid);
    const cases = await getCasesByIds(caseIds);

    return cases;
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
