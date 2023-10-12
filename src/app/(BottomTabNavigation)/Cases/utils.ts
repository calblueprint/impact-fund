import { allCases } from '../../../../lib/cases';

export default async function fetchListViewCases() {
  let result;

  await allCases().then(data => {
    result = data;
  });

  // eslint-disable-next-line no-console
  console.log(result);

  return result;
}
