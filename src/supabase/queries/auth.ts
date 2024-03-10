import supabase from '../createClient';

export const emailExists = async (email: string): Promise<boolean> => {
  const { data } = await supabase.from('users').select().eq('email', email);
  if (!data || data.length === 0) {
    return false;
  } else {
    return true;
  }
};
