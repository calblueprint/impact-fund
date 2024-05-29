import {
  AuthError,
  AuthResponse,
  Session,
  User,
  UserAttributes,
  UserMetadata,
  UserResponse,
  isAuthError,
} from '@supabase/supabase-js';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import supabaseAdmin from '../supabase/createAdminClient';
import supabase from '../supabase/createClient';

/**
 * To use AuthContext, import useSession() in whichever file you prefer.
 * You can call any file/variable that exists in the AuthState below.
 * Write all supabase queries regarding authenthication in this file, and write
 * its name and type in the AuthState interface.
 */
export interface AuthState {
  session: Session | null;
  user: User | null;
  isLoading: boolean;

  signIn: (newSession: Session | null) => void;
  signUp: (
    email: string,
    password: string,
    options: object,
  ) => Promise<AuthResponse>;
  signInWithEmail: (
    email: string,
    password: string,
  ) => Promise<AuthError | void>;
  finishAccountSignUp: (
    email: string,
    password: string,
  ) => Promise<AuthError | void>;
  sendSignUpOtp: (
    email: string,
    userData: UserMetadata,
  ) => Promise<AuthError | void>;
  sendResetOtp: (email: string) => Promise<AuthError | void>;
  verifyOtp: (email: string, token: string) => Promise<AuthError | void>;
  resendOtp: (email: string) => Promise<AuthError | void>;
  updateUser: (attributes: UserAttributes) => Promise<UserResponse>;
  resetPassword: (email: string) => Promise<
    | {
        data: object;
        error: null;
      }
    | {
        data: null;
        error: AuthError;
      }
  >;

  signOut: () => Promise<void>;
  deleteCurrentUser: (userId: string) => Promise<void>;
}

const AuthContext = createContext({} as AuthState);

export function useSession() {
  const value = useContext(AuthContext);

  return value;
}

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session: newSession } }) => {
        setSession(newSession);
        setUser(newSession ? newSession.user : null);
      })
      .finally(() => {
        setIsLoading(false);
      });

    supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
  }, []);

  const signIn = (newSession: Session | null) => {
    setSession(newSession);
  };

  const signInWithEmail = async (
    email: string,
    password: string,
  ): Promise<AuthError | void> => {
    try {
      const value = await supabase.auth.signInWithPassword({
        email,
        password,
      }); // will trigger the use effect to update the session
      if (value.error) {
        throw value.error;
      } else {
        setUser(value.data.user);
      }
    } catch (error) {
      if (isAuthError(error)) {
        return error;
      }
      console.warn('(signInWithEmail)', error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string, metaData: object) => {
    try {
      const value = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            ...metaData,
          },
        },
      });

      setUser(value.data.user);
      return value;
    } catch (error) {
      console.warn('(signUp)', error);
      throw error;
    }
  };

  const finishAccountSignUp = async (
    email: string,
    password: string,
  ): Promise<AuthError | void> => {
    try {
      const { data, error } = await updateUser({
        email,
        password,
      });
      if (error) {
        throw error;
      }
      // add user information to the public table
      await supabase.from('users').insert({
        userId: data.user.id,
        email,
      });
    } catch (error) {
      if (isAuthError(error)) {
        return error;
      }
      console.warn('(finishAccountSignUp)', error);
      throw error;
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  };

  const sendSignUpOtp = async (
    email: string,
    userData: UserMetadata,
  ): Promise<AuthError | void> => {
    try {
      const value = await supabase.auth.signInWithOtp({
        email,
        options: { data: userData },
      });
      if (value.error) {
        throw value.error;
      }
    } catch (error) {
      if (isAuthError(error)) {
        return error;
      }
      console.warn('(sendSignUpOtp)', error);
      throw error;
    }
  };

  const sendResetOtp = async (email: string) => {
    // try {
    //   const value = await supabase.auth.signInWithOtp({
    //     email,
    //     options: { shouldCreateUser: false },
    //   });
    //   if (value.error) {
    //     throw value.error;
    //   }
    //   return value;
    // } catch (error) {
    //   console.warn('there was an error sending your one time passcode');
    //   return error;
    // }
  };

  const verifyOtp = async (
    email: string,
    token: string,
  ): Promise<AuthError | void> => {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'email',
      });
      if (error) {
        throw error;
      }
      if (!data.user) {
        throw new AuthError('User data not found');
      }
    } catch (error) {
      if (isAuthError(error)) {
        return error;
      }
      console.warn('(verifyOtp)', error);
      throw error;
    }
  };

  const resendOtp = async (email: string): Promise<AuthError | void> => {
    try {
      const value = await supabase.auth.resend({
        type: 'signup',
        email,
      });
      if (value.error) {
        throw value.error;
      }
    } catch (error) {
      if (isAuthError(error)) {
        return error;
      }
      console.warn('(resendOtp)', error);
      throw error;
    }
  };

  const resetPassword = async (email: string) =>
    await supabase.auth.resetPasswordForEmail(email);

  const updateUser = async (attributes: UserAttributes) =>
    await supabase.auth.updateUser(attributes);

  const deleteCurrentUser = async (userId: string) => {
    await supabaseAdmin.auth.admin.deleteUser(userId);
  };

  const authContextValue = useMemo(
    () => ({
      user,
      session,
      isLoading,
      // sign in/out
      signIn,
      signInWithEmail,
      signOut,
      // account creation/edit
      signUp,
      finishAccountSignUp,
      sendSignUpOtp,
      sendResetOtp,
      verifyOtp,
      resendOtp,
      // helper functions
      updateUser,
      resetPassword,
      deleteCurrentUser,
    }),
    [session, user, isLoading],
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
