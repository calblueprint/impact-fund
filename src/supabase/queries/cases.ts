import {
  Case,
  CasePartial,
  CaseUid,
  UserUid,
  ScannerQueryResponse,
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
    console.warn('(getAllCaseIds)', error);
    throw error;
  }
}

/**
 * Fetch a single `Case` by it's id.
 * @param caseId target case id.
 * @returns `Case` data.
 */
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

/**
 * Format raw case data from supabase into `Case` object.
 *
 * @param item raw supabase data.
 * @returns `Case` object.
 */
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
