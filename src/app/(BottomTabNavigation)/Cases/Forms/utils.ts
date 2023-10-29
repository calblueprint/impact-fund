import { CaseUid, Form } from '../../../../types/types';

/** WIP: fetch and return a list of pdf links associated with a specific case */
export function fetchPdfObjects(caseUid: CaseUid) {
  const date1 = new Date('01-22-2023');
  const date2 = new Date('01-23-2023');

  const pdfs: Form[] = [
    {
      id: 'adfasdf',
      title: 'test1',
      date: date1,
      pdfLink: 'https://www.africau.edu/images/default/sample.pdf',
    },
    {
      id: 'asdfaskdfasdlfkkj',
      title: 'test2',
      date: date2,
      pdfLink:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
  ];

  return pdfs;
}
