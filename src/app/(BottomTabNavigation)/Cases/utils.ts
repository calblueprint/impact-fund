import supabase from '../../../../lib/supabase';

export async function allCases() {
  try {
    const { data } = await supabase.from('Cases').select();
    // eslint-disable-next-line no-console
    console.log(data);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return null;
  }
}

export function fetchListViewCases() {
  // const cases = await allCases();
  // return cases;
  const dummyCases = [
    {
      uid: '1',
      title: 'State of California v. JUUL Labs, Inc.',
      status: 'In Progress',
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      uid: '2',
      title: 'State of California v. Ford Motor Co.',
      status: 'Settled',
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      uid: '3',
      title: 'State of California v. JUUL Labs, Inc.',
      status: 'In Progress',
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      uid: '4',
      title: 'State of California v. Ford Motor Co.',
      status: 'Settled',
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
  ];

  return dummyCases;
}
