import { colors } from '../../../styles/colors';
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

export function getStatusColor(status: string) {
  if (
    status === 'In Progress' ||
    status === 'New Case' ||
    status === 'Settled' ||
    status === 'Appeal' ||
    status === 'Payment Processing' ||
    status === 'Payment Distributed'
  ) {
    return {
      background: {
        backgroundColor: colors.lightGreen,
        borderColor: colors.darkGreen,
      },
      text: { color: colors.darkGreen },
    };
  } else if (status === 'Pending') {
    return {
      background: {
        backgroundColor: colors.lightYellow,
        borderColor: colors.darkYellow,
      },
      text: { color: colors.darkYellow },
    };
  } else if (status === 'Action Required') {
    return {
      background: {
        backgroundColor: colors.lightRed,
        borderColor: colors.darkRed,
      },
      text: { color: colors.darkRed },
    };
  } else {
    return {
      background: {
        backgroundColor: colors.lightGrey,
        borderColor: colors.midGrey,
      },
      text: { color: colors.midGrey },
    };
  }
}
