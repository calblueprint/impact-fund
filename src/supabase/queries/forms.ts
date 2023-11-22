import { CaseUid, FormPartial, Form } from '../../types/types';
import supabase from '../createClient';

/**
 * Fetch the supabase storage publicUrl associated with the given form filename.
 *
 * @param filename name of form file stored in supabase storage
 * @returns publicUrl of the form
 */
async function getPublicFormUrl(filename: string): Promise<string> {
  try {
    const { data } = await supabase.storage
      .from('caseFiles')
      .getPublicUrl(filename);
    return data.publicUrl;
  } catch (error) {
    console.warn('(getPublicFormUrl)', error);
    throw error;
  }
}

/**
 * Fetch the `Form` object associated with the target filename.
 *
 * @param caseUid form buckets for a given case labeled with their caseUid
 * @param filename name of file stored within the target case bucket in supabase storage
 * @returns formatted `Form` object
 */
export async function fetchFormByFilename(
  caseUid: CaseUid,
  filename: string,
): Promise<Form> {
  try {
    const { data } = await supabase
      .from('caseForms')
      .select()
      .eq('caseUid', caseUid)
      .eq('filename', filename);

    if (!data) {
      throw new Error(`Form not found: ${caseUid}/${filename}`);
    }

    return await formatForm(caseUid, data[0]);
  } catch (error) {
    console.warn('(fetchFormByFilename)', error);
    throw error;
  }
}

/**
 * Fetch all `Form` objects associated with the target caseUid.
 *
 * @param caseUid target caseUid
 * @returns list of formatted `Form` objects
 */
export async function fetchAllForms(caseUid: CaseUid): Promise<Form[]> {
  try {
    // fetch rows with the matching CaseUid
    const { data } = await supabase
      .from('caseForms')
      .select()
      .eq('caseUid', caseUid);

    if (!data) {
      throw new Error(`no forms found for the given case: ${caseUid}`);
    }
    // return a list of properly formatted `Form`s
    return await Promise.all(
      data.map(async queryItem => {
        return await formatForm(caseUid, queryItem);
      }),
    );
  } catch (error) {
    console.warn('(fetchAllForms)', error);
    throw error;
  }
}

/**
 * Return a properly formatted `Form` object from the supabase query data.
 *
 * @param caseUid target caseUid
 * @param queryItem raw form data returned from supabase query
 * @returns formatted `Form` object
 */
export async function formatForm(
  caseUid: CaseUid,
  queryItem: any,
): Promise<Form> {
  try {
    // organize form MetaData without publicUrl
    const partialForm: FormPartial = {
      formUid: queryItem.formUid,
      caseUid: queryItem.caseUid,
      title: queryItem.title,
      filename: queryItem.filename,
      date: queryItem.date,
    };
    // fetch form publicUrl and attach it to the form object
    const storageQuery = `${caseUid}/${partialForm.filename}`;
    const formUrl = await getPublicFormUrl(storageQuery);
    const completeForm: Form = {
      ...partialForm,
      formUrl,
    };
    return completeForm;
  } catch (error) {
    // propogate error downward for handling
    throw error;
  }
}
