import {
  getPartialForms,
  getPublicFormUrl,
} from '../../../../supabase/queries/cases';
import { CaseUid, Form } from '../../../../types/types';

/**
 * Fetch an array of `Form` objects associated with a given `caseUid`.
 *
 * @param caseUid uid for the target Case
 * @returns array of `Form` objects
 */
export async function fetchFormObjects(caseUid: CaseUid): Promise<Form[]> {
  const partialFormsList = await getPartialForms(caseUid);

  return await Promise.all(
    partialFormsList.map(async partialForm => {
      const formUrl = await getPublicFormUrl(
        `${caseUid}/${partialForm.filename}`,
      );
      const form: Form = {
        ...partialForm,
        formUrl,
      };
      return form;
    }),
  );
}
