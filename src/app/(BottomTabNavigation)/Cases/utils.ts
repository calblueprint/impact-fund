import supabase from '../../../supabase/createClient';
import {
  getCaseIdsFromUserId,
  getCasesByIds,
} from '../../../supabase/queries/cases';
import { Case, UserUid } from '../../../types/types';

export async function fetchListViewCases(userUid: UserUid): Promise<Case[]> {
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

export async function fetchImageUrl(imagePath: string): Promise<string> {
  try {
    const { data } = supabase.storage
      .from('caseImages')
      .getPublicUrl(imagePath);
    return data.publicUrl;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(fetchImageUrl)', error);
    throw error;
  }
}
