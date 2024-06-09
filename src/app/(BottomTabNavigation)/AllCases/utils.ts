import { router } from 'expo-router';
import { Linking } from 'react-native';

import { colors } from '../../../styles/colors';
import {
  getCaseIdsFromUserId,
  getCasesByIds,
} from '../../../supabase/queries/cases';
import {
  Case,
  GreenStatusOptions,
  YellowStatusOptions,
  RedStatusOptions,
  UserUid,
} from '../../../types/types';

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
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const date = new Date(
    dateObject.toLocaleString('en-US', {
      timeZone: userTimeZone,
    }),
  );
  const dateSplit: string[] = date.toDateString().split(' ');
  return `${dateSplit[1]} ${dateSplit[2]}, ${dateSplit[3]}`;
}

export function getStatusColor(status: string) {
  if (Object.values(GreenStatusOptions).includes(status)) {
    return {
      background: {
        backgroundColor: colors.lightGreen,
        borderColor: colors.darkGreen,
        shadowColor: colors.darkGreen,
      },
      text: { color: colors.darkGreen },
    };
  } else if (Object.values(YellowStatusOptions).includes(status)) {
    return {
      background: {
        backgroundColor: colors.lightYellow,
        borderColor: colors.midYellow,
        shadowColor: colors.midYellow,
      },
      text: { color: colors.darkYellow },
    };
  } else if (Object.values(RedStatusOptions).includes(status)) {
    return {
      background: {
        backgroundColor: colors.lightRed,
        borderColor: colors.midRed,
        shadowColor: colors.midRed,
      },
      text: { color: colors.darkRed },
    };
  } else {
    return {
      background: {
        backgroundColor: colors.lightGrey,
        borderColor: colors.midGrey,
        shadowColor: colors.midGrey,
      },
      text: { color: colors.midGrey },
    };
  }
}

/**
 * Routes user to the given url. Returns a Promise object:
 * - If the user confirms the open dialog or the url automatically opens, the promise is resolved.
 * - If the user cancels the open dialog or there are no registered applications for the url, the promise is rejected
 */
export async function openUrl(url: string) {
  const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
  if (supported) {
    await Linking.openURL(url); // It will open the URL on browser.
  }
}

/**
 * Clear the stack to prevent users going back. Allows push animation to be used.
 * @param path
 */
export async function resetAndPushToRouter(path: string) {
  while (router.canGoBack()) {
    router.back();
  }
  router.replace(path);
}
