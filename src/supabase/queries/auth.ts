import supabase from '../createClient';

export const signUpUser = async (
  firstName: string,
  middleName: string | null,
  lastName: string,
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
          firstName,
          middleName,
          lastName,
          address,
        },
      },
    });
    await supabase.from('users').insert({
      firstName,
      middleName,
      lastName,
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
    console.error('(signOutUser)', error);
    throw error;
  }
};

export const emailExists = async (email: string): Promise<boolean> => {
  const { data } = await supabase.from('users').select().eq('email', email);
  if (!data || data.length === 0) {
    return false;
  } else {
    return true;
  }
};

export const passwordExists = async (
  email: string,
  password: string,
): Promise<boolean> => {
  const { data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (!data.user) {
    return false;
  } else {
    return true;
  }
};
