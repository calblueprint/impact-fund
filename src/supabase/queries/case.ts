import supabase from '../createClient';

export const getCase = async (caseId: any) => {
  const { data, error } = await supabase
    .from('Cases')
    .select()
    .eq('id', caseId);
  return { data, error };
};

export const uploadCase = async (caseId: any) => {
  // temporary signin
  await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.identities[0].user_id;
  const { error } = await supabase.from('status').insert({ caseId, userId });

  // temporary sign out
  await supabase.auth.signOut();
  console.log(error);
  return { error };
};
