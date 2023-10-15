import { getCaseByCaseId } from '../../../supabase/cases';
import { CaseCardProps } from './types';

export default async function fetchListViewCases(): Promise<CaseCardProps[]> {
  // try {
  // const fetchedData = await allCases();
  const fetchedData = await getCaseByCaseId(1);

  if (!fetchedData) {
    throw new Error();
  }

  const formattedData = fetchedData.map(item => {
    const formattedCase: CaseCardProps = {
      uid: item.id,
      title: item.title,
      status: item.caseStatus,
      imageUrl: item.image,
    };
    return formattedCase;
  });

  // eslint-disable-next-line no-console
  console.log(formattedData);

  return formattedData;
}
