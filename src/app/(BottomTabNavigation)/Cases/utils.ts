import { allCases } from '../../../../lib/cases';

export type Case = {
  uid: string;
  title: string;
  status: string;
  imageUrl: string;
};

export default async function fetchListViewCases() {
  let fetchedData;

  await allCases().then((data: Case[] | null | undefined) => {
    fetchedData = data;
  });

  if (!fetchedData) {
    return;
  }

  const formattedData = [];
  for (let i = 0; i < 10; i += 1) {
    // eslint-disable-next-line camelcase
    const { title, image, caseStatus } = fetchedData[i];
    // eslint-disable-next-line no-console
    console.log(title);

    formattedData.push({
      title,
      status: caseStatus,
      imageUrl: image,
    });
  }

  // eslint-disable-next-line no-console
  console.log(formattedData);

  return formattedData;
}
