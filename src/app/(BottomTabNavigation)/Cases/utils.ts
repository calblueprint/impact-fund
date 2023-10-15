import { allCases } from '../../../supabase/cases';
import { caseCardProps } from './types';

export default async function fetchListViewCases(): Promise<caseCardProps[]> {
  // try {
  const fetchedData = await allCases();

  if (!fetchedData) {
    throw new Error();
  }

  const formattedData = fetchedData.map(item => {
    const formattedCase: caseCardProps = {
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
