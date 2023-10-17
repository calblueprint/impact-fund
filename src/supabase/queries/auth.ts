import supabase from '../createClient';

export const signUpUser = async (
  name: string,
  email: string,
  address: string,
  password: string,
) => {
  try {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          address,
        },
      },
    });
    await supabase.from('users').insert({
      name,
      email,
      address,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('(signUpUser)', error);
    throw error;
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('(signInUser)', error);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('(signOutError)', error);
    throw error;
  }
};
