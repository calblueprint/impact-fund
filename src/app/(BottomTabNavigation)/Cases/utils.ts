import { getCaseIdsFromUserId, getCasesByIds } from '../../../supabase/cases';
import { CaseCardProps, UserUid } from './types';

export default async function fetchListViewCases(
  userUid: UserUid,
): Promise<CaseCardProps[]> {
  if (!userUid) {
    throw new Error();
  }

  const caseIds = await getCaseIdsFromUserId(userUid);

  const rawData = await getCasesByIds(caseIds);

  if (!rawData) {
    throw new Error();
  }

  const formattedData = rawData.map(item => {
    const formattedCase: CaseCardProps = {
      id: item.id,
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
