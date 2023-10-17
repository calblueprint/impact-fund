import { Profile } from '../../types/types';
import supabase from '../createClient';

export const signUpUser = async (profileData: Profile, password: string) => {
  await supabase.auth.signUp({
    email: profileData.email,
    password, // question: how do we handle password, should that just be another param and state variable bc idt we just store passwords on the database...
    options: {
      data: {
        firstName: profileData.firstName,
        middleName: profileData.middleName,
        lastName: profileData.lastName,
        mailingAddress: profileData.mailingAddress,
      },
    },
  });
};

export const signInUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  console.log(data);
  console.log('signed in');
  // console.log(error);
  // console.log(supabase.auth.getSession());
};

export const signOutUser = async () => {
  const { error } = await supabase.auth.signOut();
  console.log(error);
  console.log('sign out');
};

export const testStorage = async () => {
  const { data } = await supabase.storage
    .from('caseImages')
    .getPublicUrl('OneDirection');
  console.log(data.publicUrl);
  return data.publicUrl;
};
