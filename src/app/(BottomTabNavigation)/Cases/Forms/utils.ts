import {
  getFormObjects,
  getFormUrl,
  // getFormsByCaseUid,
} from '../../../../supabase/queries/cases';
import { CaseUid, Form } from '../../../../types/types';

/** WIP: fetch and return a list of pdf links associated with a specific case */
export async function fetchFormObjects(caseUid: CaseUid): Promise<Form[]> {
  const formMetaDataList = await getFormObjects(caseUid);

  // console.log(formMetaDataList);

  const forms: Form[] = [];

  formMetaDataList.map(async item => {
    const formUrl = await getFormUrl(item.filename);
    const form: Form = {
      ...item,
      formUrl,
    };
    console.log(form);
    forms.push(form);
  });

  Promise.all(forms).then(forms => console.log(forms));
  // console.log('formsPromise: ' + formsPromise);

  return forms;
}
