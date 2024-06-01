import supabase from '../createClient';

export const emailExists = async (email: string): Promise<boolean> => {
  try {
    const { data } = await supabase.from('users').select().eq('email', email);
    if (!data || data.length === 0) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.warn('(emailExists) could not access Supabase!');
    throw error;
  }
};
