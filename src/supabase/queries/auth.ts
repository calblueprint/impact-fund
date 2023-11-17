import { User } from '../../types/types';
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
    console.error('(deleteCurrentUser)', error);
    throw error;
  }
};

export const getCurrentUserInfo = async (): Promise<User> => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const userInfo = {
        email: user.user_metadata.email,
        fullName: user.user_metadata.fullName,
        streetName: user.user_metadata.streetName,
        city: user.user_metadata.city,
        state: user.user_metadata.state,
        zip: user.user_metadata.zip,
        id: user.id,
      };
      return userInfo;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('(getCurrentUserInfo)', error);
    throw error;
  }
};

export const updateCurrUserName = async (newFullName: string) => {
  try {
    await supabase.auth.updateUser({
      data: {
        fullName: newFullName,
      },
    });
  } catch (error) {
    console.error('(updateCurrUserName)', error);
    throw error;
  }
};

export const updateCurrUserAddress = async (
  newStreetName: string,
  newCity: string,
  newState: string,
  newZip: string,
) => {
  try {
    supabase.auth.updateUser({
      data: {
        streetName: newStreetName,
        city: newCity,
        state: newState,
        zip: newZip,
      },
    });
  } catch (error) {
    console.error('(updateCurrUserAddress)', error);
    throw error;
  }
};
