import { Linking } from 'react-native';

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

/**
 * Routes user to the given url. Returns a Promise object:
 * - If the user confirms the open dialog or the url automatically opens, the promise is resolved.
 * - If the user cancels the open dialog or there are no registered applications for the url, the promise is rejected
 */
export async function openUrl(url: string) {
  const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
  if (supported) {
    console.log(`routing user to: ${url}`);
    await Linking.openURL(url); // It will open the URL on browser.
  }
}
