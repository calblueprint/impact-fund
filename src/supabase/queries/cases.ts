import {
  Case,
  CasePartial,
  CaseUid,
  Eligibility,
  UserUid,
} from '../../types/types';
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

export async function getCaseById(caseId: CaseUid): Promise<CasePartial> {
  try {
    const { data } = await supabase.from('cases').select().eq('caseId', caseId);
    if (!data) {
      throw new Error('case not found');
    }
    return formatCase(data[0]);
  } catch (error) {
    console.warn('(getCaseById)', error);
    throw error;
  }
}

export async function isValidCase(caseId: CaseUid): Promise<boolean> {
  const { data } = await supabase.from('cases').select().eq('caseId', caseId);
  if (!data) {
    return false;
  }
  return data.length !== 0;
}

export async function uploadCase(caseId: CaseUid): Promise<void> {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userId = user?.id;
    await supabase.from('status').insert({ caseId, userId });
  } catch (error) {
    console.warn(error);
    throw error;
  }
}

export async function containsDuplicateCase(caseId: CaseUid): Promise<boolean> {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userId = user?.id;
    const { data } = await supabase
      .from('status')
      .select()
      .eq('userId', userId)
      .eq('caseId', caseId);
    return data?.length !== 0;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}

/**
 * Fetch the Case objects corresponding to an array of `CaseId`s. Fetches cases from `cases` table.
 *
 * @param caseIds list of `CaseId`s
 * @returns array of `Case` objects
 */
export async function getCasesByIds(caseIds: CaseUid[]): Promise<Case[]> {
  try {
    // query cases contained in a list of caseIds
    const { data } = await supabase
      .from('cases')
      .select()
      .in('caseId', caseIds);

    // throw error if supabase data is empty
    if (!data) {
      throw new Error('no cases found');
    }

    return await Promise.all(
      data.map(async item => {
        const partialCase = formatCase(item);
        const imageUrl = await getImageUrl(partialCase.id);
        const caseData: Case = {
          ...partialCase,
          imageUrl,
        };
        return caseData;
      }),
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(getCasesByIds)', error);
    throw error;
  }
}

/**
 * Parse supabase case query and return `CasePartial` object.
 *
 * @param item supabase Case query return data
 * @returns `CasePartial` object
 */
export function formatCase(item: any): CasePartial {
  const formattedCase: CasePartial = {
    id: item.caseId,
    approved: item.approved,
    title: item.title,
    blurb: item.blurb,
    summary: item.summary,
    caseSite: item.caseSite,
    claimLink: item.claimLink,
    optOutLink: item.optOutLink,
    caseStatus: item.status,
    date: item.date,
    lawFirm: item.lawFirm,
  };
  return formattedCase;
}

/**
 * Update a specific User/Case status
 * @param caseId specified caseId
 * @param status status to be updated in the specific User/Case row
 * @returns nothing
 */
export async function updateCaseStatus(
  caseId: CaseUid,
  status: Eligibility,
): Promise<void> {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userId = user?.id;
    await supabase
      .from('status')
      .update({ eligibility: status })
      .eq('userId', userId)
      .eq('caseId', caseId);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(updateCaseStatus)', error);
    throw error;
  }
}

export async function getCaseStatus(caseId: CaseUid): Promise<Eligibility> {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userId = user?.id;
    const { data } = await supabase
      .from('status')
      .select()
      .eq('userId', userId)
      .eq('caseId', caseId);
    if (!data) {
      throw new Error('Status not found');
    }
    return data[0].eligibility;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(getCaseStatus)', error);
    throw error;
  }
}

/**
 * Fetch image from Supabase storage and return its public URL.
 *
 * @param imagePath image path
 * @returns Image URL string
 */
export async function getImageUrl(imagePath: string): Promise<string> {
  try {
    const { data } = supabase.storage
      .from('caseImages')
      .getPublicUrl(imagePath);
    return data.publicUrl;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(getImageUrl)', error);
    throw error;
  }
}
