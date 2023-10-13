import supabase from './createClient';

export const signUpUser = async () => {
  await supabase.auth.signUp({
    email: 'example1@email.com',
    password: 'example-password',
  });
};

export const signInUser = async () => {
  await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  });
};
