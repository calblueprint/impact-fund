import { Case, CaseUid, UserUid, FormPartial } from '../../types/types';
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

export async function getCaseById(caseId: CaseUid): Promise<Case> {
  try {
    const { data } = await supabase.from('cases').select().eq('caseId', caseId);
    if (!data) {
      throw new Error('case not found');
    }
    return parseCase(data[0]);
  } catch (error) {
    console.warn('(getCaseById)', error);
    throw error;
  }
}

/**
 * Fetch an array of Case objects contained in an array of `CaseId`s. Fetches cases from `cases` table.
 *
 * @param caseIds list of `CaseId`s
 * @returns array of `CaseCard` objects
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
    // cast raw sql data as CaseCardProps data type
    return data.map(item => parseCase(item));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(getCasesByIds)', error);
    throw error;
  }
}

/**
 * Parse supabase case query and return Case object.
 *
 * @param item Case query result
 * @returns `Case` object
 */
export function parseCase(item: any): Case {
  const formattedCase: Case = {
    id: item.caseId,
    approved: item.approved,
    title: item.title,
    blurb: item.blurb,
    summary: item.summary,
    image: item.image,
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
 * Fetch the supabase storage publicUrl associated with the given form filename.
 *
 * @param filename name of form file stored in supabase storage
 * @returns publicUrl of the form
 */
export async function getPublicFormUrl(filename: string): Promise<string> {
  try {
    // fetch the form objects from supabase storage
    const { data } = await supabase.storage
      .from('caseFiles')
      .getPublicUrl(filename);
    return data.publicUrl;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(getFormsByCaseUid)', error);
    throw error;
  }
}

/**
 * Fetch the `FormMetaData` for forms associated with a given case.
 *
 * @param caseUid uid of target case.
 * @returns list of `FormMetaData` objects.
 */
export async function getPartialForms(
  caseUid: CaseUid,
): Promise<FormPartial[]> {
  try {
    // fetch rows with the matching CaseUid
    const { data } = await supabase
      .from('caseForms')
      .select()
      .eq('caseId', caseUid);

    if (!data) {
      throw new Error(`no forms found for the given case: ${caseUid}`);
    }

    return data.map(item => {
      const form: FormPartial = {
        id: item.formId,
        title: item.title,
        filename: item.filename,
        date: item.date,
      };
      return form;
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('(getFormObjects)', error);
    throw error;
  }
}
