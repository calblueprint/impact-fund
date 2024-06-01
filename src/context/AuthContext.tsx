import {
  AuthError,
  Session,
  User,
  UserAttributes,
  UserMetadata,
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

  signInWithEmail: (
    email: string,
    password: string,
  ) => Promise<AuthError | void>;
  signOut: () => Promise<AuthError | void>;
  sendSignUpOtp: (
    email: string,
    userData: UserMetadata,
  ) => Promise<AuthError | void>;
  sendResetOtp: (email: string) => Promise<AuthError | void>;
  verifyOtp: (email: string, token: string) => Promise<AuthError | void>;
  resendOtp: (email: string) => Promise<AuthError | void>;
  finishAccountSignUp: (
    email: string,
    password: string,
  ) => Promise<AuthError | void>;
  deleteCurrentUser: (userId: string) => Promise<AuthError | void>;
  updateUser: (attributes: UserAttributes) => Promise<AuthError | void>;
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

  const signInWithEmail = async (
    email: string,
    password: string,
  ): Promise<AuthError | void> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw error;
      } else {
        // will trigger the use effect to update the session
        setUser(data.user);
      }
    } catch (error) {
      if (isAuthError(error)) {
        return error;
      }
      console.warn('(signInWithEmail)', error);
      throw error;
    }
  };

  const signOut = async (): Promise<AuthError | void> => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      setUser(null);
      setSession(null);
    } catch (error) {
      if (isAuthError(error)) {
        return error;
      }
      console.warn('(signOut)', error);
      throw error;
    }
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

  const sendResetOtp = async (email: string): Promise<AuthError | void> => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: false },
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      if (isAuthError(error)) {
        return error;
      }
      console.warn('(sendResetOtp)', error);
      throw error;
    }
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

  const finishAccountSignUp = async (
    email: string,
    password: string,
  ): Promise<AuthError | void> => {
    try {
      const { data, error } = await supabase.auth.updateUser({
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
      setUser(data.user);
    } catch (error) {
      if (isAuthError(error)) {
        return error;
      }
      console.warn('(finishAccountSignUp)', error);
      throw error;
    }
  };

  const deleteCurrentUser = async (
    userId: string,
  ): Promise<AuthError | void> => {
    try {
      const signOutError = await signOut();
      if (signOutError) {
        throw signOutError;
      }
      await supabaseAdmin.auth.admin.deleteUser(userId);
    } catch (error) {
      if (isAuthError(error)) {
        return error;
      }
      console.warn('(deleteCurrentUser)', error);
      throw error;
    }
  };

  const updateUser = async (
    attributes: UserAttributes,
  ): Promise<AuthError | void> => {
    try {
      const { error } = await supabase.auth.updateUser(attributes);
      if (error) {
        throw error;
      }
    } catch (error) {
      if (isAuthError(error)) {
        return error;
      }
      console.warn('(updateUser)', error);
      throw error;
    }
  };

  const authContextValue = useMemo(
    () => ({
      user,
      session,
      isLoading,
      // sign in/out
      signInWithEmail,
      signOut,
      // account creation/edit
      finishAccountSignUp,
      sendSignUpOtp,
      sendResetOtp,
      verifyOtp,
      resendOtp,
      // utils
      updateUser,
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
