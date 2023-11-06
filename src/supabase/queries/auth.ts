import supabaseAdmin from '../createAdminClient';
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

export const deleteCurrentUser = async (userId: string) => {
  try {
    await supabaseAdmin.auth.admin.deleteUser(userId);
  } catch (error) {
    throw error;
  }
};

export const getCurrentUserInfo = async () => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    throw error;
  }
};

export const updateCurrUserName = async (
  newFirstName: string,
  newLastName: string,
) => {
  try {
    await supabase.auth.updateUser({
      data: { firstName: newFirstName, lastName: newLastName },
    });
  } catch (error) {
    throw error;
  }
};

export const updateCurrUserAddress = async (newAddress: string) => {
  try {
    supabase.auth.updateUser({
      data: { address: newAddress },
    });
  } catch (error) {
    throw error;
  }
};
