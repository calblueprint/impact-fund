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
    if (userId === 'NO_ID') {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      userId = user?.id as UserUid;
    }
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

// Similar to top function but gets ALL CaseIds
export async function getAllCaseIds(): Promise<CaseUid[]> {
  try {
    const { data } = await supabase.from('cases').select();
    if (!data) {
      throw new Error('There was an error fetching caseIds');
    }
    return data.map(item => item.caseId as CaseUid);
  } catch (error) {
    console.warn(error);
    throw error;
  }
}

// Fetch a single case using its ID
export async function getCaseById(caseId: CaseUid): Promise<Case> {
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

type ScannerQueryResponse =
  | {
      data: { case: Case };
      error: null;
    }
  | {
      data: null;
      error: any;
    };

/**
 * Query supabase according to the QR code scanner result.
 * @param scannedData
 * @returns `Case` or indicate that none exists.
 */
export async function getScannedData(
  scannedData: string,
): Promise<ScannerQueryResponse> {
  try {
    const { data } = await supabase
      .from('cases')
      .select()
      .eq('caseId', scannedData);
    if (!data) {
      throw new Error('case not found');
    }
    const caseData: Case = await formatCase(data[0]);
    const res: ScannerQueryResponse = {
      data: {
        case: caseData,
      },
      error: null,
    };
    return res;
  } catch (error) {
    const res: ScannerQueryResponse = {
      data: null,
      error,
    };
    return res;
  }
}

/**
 * Create a case-user association on supabase.
 * @param caseId case being added.
 * @param userId user joining that case.
 */
export async function addCase(caseId: CaseUid, userId: UserUid): Promise<void> {
  try {
    await supabase.from('status').insert({ caseId, userId });
  } catch (error) {
    console.warn(error);
    throw error;
  }
}

/**
 * Remove a case-user association from supabase.
 * @param caseId case to be removed.
 * @param userId user leaving the case.
 */
export async function removeCase(
  caseId: CaseUid,
  userId: UserUid,
): Promise<void> {
  try {
    await supabase
      .from('status')
      .delete()
      .eq('userId', userId)
      .eq('caseId', caseId);
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
        return formatCase(item);
      }),
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(getCasesByIds)', error);
    throw error;
  }
}

export async function formatCase(item: any): Promise<Case> {
  const partialCase = formatPartialCaseFromQuery(item);
  const imageUrl = await getImageUrl(partialCase.id);
  const caseData: Case = {
    ...partialCase,
    imageUrl,
  };
  return caseData;
}
/**
 * Parse supabase case query and return `CasePartial` object.
 *
 * @param item supabase Case query return data
 * @returns `CasePartial` object
 */
export function formatPartialCaseFromQuery(item: any): CasePartial {
  const formattedPartial: CasePartial = {
    id: item.caseId,
    approved: item.approved,
    title: item.title,
    briefSummary: item.briefSummary,
    description: item.description,
    caseSite: item.caseSite,
    claimLink: item.claimLink,
    optOutLink: item.optOutLink,
    caseStatus: item.status,
    date: item.date,
    lawFirm: item.lawFirm,
    formCount: item.formCount,
    featuredFormName: item.featuredFormName,
  };
  return formattedPartial;
}

/**
 * Update a specific User/Case status
 *
 * @param caseId specified caseId
 * @param status status to be updated in the specific User/Case row
 * @returns nothing
 */
export async function updateCaseStatus(
  caseId: CaseUid,
  status: Eligibility,
): Promise<void> {
  try {
    console.log('update status to: ' + status);
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
