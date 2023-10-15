import supabase from '../../../lib/supabase';

export const getCase = async (caseId: any) => {
  const { data, error } = await supabase
    .from('Cases')
    .select()
    .eq('id', caseId);
  return { data, error };
};

export const uploadCase = async (caseId: any) => {
  await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);
  const { error } = await supabase.auth.signOut();
  return { error };
};
