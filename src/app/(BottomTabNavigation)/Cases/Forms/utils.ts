import { getFormByCaseId } from '../../../../supabase/queries/cases';
import { CaseUid, Form } from '../../../../types/types';

/** WIP: fetch and return a list of pdf links associated with a specific case */
export async function fetchFormObjects(caseUid: CaseUid) {
  const date1 = new Date('10-06-2023');
  const date2 = new Date('10-06-2023');

  // for testing supabase storage fetch
  const formUrl = await getFormByCaseId();

  const pdfs: Form[] = [
    {
      id: 'adfasdf',
      title: 'Supabase Query',
      date: date1,
      pdfLink: formUrl,
    },
    {
      id: 'asdfaskdfasdlfkkj',
      title: 'Hard Code Test',
      date: date2,
      pdfLink:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
  ];

  return pdfs;
}
