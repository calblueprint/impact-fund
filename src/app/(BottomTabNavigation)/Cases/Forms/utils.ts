import { getFormsByCaseUid } from '../../../../supabase/queries/cases';
import { CaseUid, Form } from '../../../../types/types';

/** WIP: fetch and return a list of pdf links associated with a specific case */
export async function fetchFormObjects(caseUid: CaseUid) {
  const formUrls = await getFormsByCaseUid(caseUid);
  console.log(formUrls);

  const exampleDate = new Date('10-06-2023');
  const pdfs: Form[] = [];
  formUrls.map((item, index) => {
    pdfs.push({
      id: String(index),
      title: `form ${index}`,
      date: exampleDate,
      pdfLink: item,
    });
  });

  return pdfs;
}
