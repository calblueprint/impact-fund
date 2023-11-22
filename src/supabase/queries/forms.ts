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
      data.map(async rawFormData => {
        return await formatForm(caseUid, rawFormData);
      }),
    );
  } catch (error) {
    console.warn('(fetchAllForms)', error);
    throw error;
  }
}

export async function formatForm(caseUid: CaseUid, item: any): Promise<Form> {
  try {
    // organize form MetaData without publicUrl
    const partialForm: FormPartial = {
      formUid: item.formUid,
      caseUid: item.caseUid,
      title: item.title,
      filename: item.filename,
      date: item.date,
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
