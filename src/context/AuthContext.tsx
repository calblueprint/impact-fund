import {
  AuthError,
  AuthResponse,
  Session,
  User,
  UserAttributes,
  UserResponse,
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
  signInWithEmail: (email: string, password: string) => Promise<AuthResponse>;
  fullySignUpUser: (
    fullName: string,
    email: string,
    password: string,
    streetName: string,
    city: string,
    state: string,
    zip: string,
  ) => Promise<UserResponse>;
  sendOtp: (email: string) => Promise<AuthResponse>;
  verifyOtp: (email: string, token: string) => Promise<AuthResponse>;
  resendOtp: (email: string) => Promise<AuthResponse>;
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

  const signInWithEmail = async (email: string, password: string) => {
    const value = await supabase.auth.signInWithPassword({
      email,
      password,
    }); // will trigger the use effect to update the session

    setUser(value.data.user);
    return value;
  };

  const signUp = async (email: string, password: string, metaData: object) => {
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
  };

  const fullySignUpUser = async (
    fullName: string,
    email: string,
    password: string,
    streetName: string,
    city: string,
    state: string,
    zip: string,
  ) => {
    try {
      const value = await updateUser({
        email,
        password,
        data: {
          fullName,
          streetName,
          city,
          state,
          zip,
        },
      });
      // add user information to the public table
      if (value.data.user) {
        await supabase.from('users').insert({
          userId: value.data.user.id,
          email,
          fullName,
        });
      }
      return value;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('(signUpUser)', error);
      throw error;
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  };

  const sendOtp = async (email: string) => {
    try {
      return await supabase.auth.signInWithOtp({ email });
    } catch (error) {
      console.warn('there was an error sending your one time passcode');
      throw error;
    }
  };

  const verifyOtp = async (email: string, token: string) => {
    const value = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email',
    });

    // if (value.data.user) setUser(value.data.user);
    return value;
  };

  const resendOtp = async (email: string) => {
    try {
      return await supabase.auth.resend({
        type: 'signup',
        email,
      });
    } catch (error) {
      console.warn('there was an error resending your one time passcode');
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
      signUp,
      signIn,
      signInWithEmail,
      signOut,
      fullySignUpUser,
      sendOtp,
      verifyOtp,
      updateUser,
      resetPassword,
      resendOtp,
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
