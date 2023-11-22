import {
  fetchFormByFilename,
  fetchAllForms,
} from '../../../../supabase/queries/forms';
import { CaseUid, Form } from '../../../../types/types';

// TODO: implement error handling for the following funcitons.

/**
 * Gets the featured `Form` associated with a given case.
 * @param caseUid filenames aren't unique globally: this helps us reduce the scope of our search.
 * @param filename filename of the featured form
 * @returns `Form` obeject
 */
export async function getFeaturedForm(
  caseUid: CaseUid,
  filename: string,
): Promise<Form> {
  return await fetchFormByFilename(caseUid, filename);
}

/**
 * Gets all `Form` objects associated with a given case.
 * @param caseUid uid of the target case
 * @returns list of formatted form objects
 */
export async function getAllForms(caseUid: CaseUid): Promise<Form[]> {
  return await fetchAllForms(caseUid);
}
