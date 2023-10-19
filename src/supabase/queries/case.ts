import supabase from '../createClient';

export const getCase = async (caseId: any) => {
  const { data, error } = await supabase
    .from('Cases')
    .select()
    .eq('id', caseId);
  return { data, error };
};

export const uploadCase = async (caseId: any) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;
  const { error } = await supabase.from('status').insert({ caseId, userId });

  console.log(error);
  return { error };
};
