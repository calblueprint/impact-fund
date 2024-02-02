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

import supabase from '../supabase/createClient';

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
  resendVerification: (email: string) => Promise<AuthResponse>;
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
  updateUser: (attributes: UserAttributes) => Promise<UserResponse>;
  signOut: () => Promise<void>;
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

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
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

  const resendVerification = async (email: string) =>
    await supabase.auth.resend({
      type: 'signup',
      email,
    });

  const resetPassword = async (email: string) =>
    await supabase.auth.resetPasswordForEmail(email);

  const updateUser = async (attributes: UserAttributes) =>
    await supabase.auth.updateUser(attributes);

  const authContextValue = useMemo(
    () => ({
      user,
      session,
      isLoading,
      signUp,
      signIn,
      signInWithEmail,
      signOut,
      verifyOtp,
      updateUser,
      resetPassword,
      resendVerification,
    }),
    [session, user, isLoading],
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   useReducer,
//   useMemo,
// } from 'react';

// import supabase from '../supabase/createClient';
// import { getCurrentUserInfo } from '../supabase/queries/auth';
// import { User } from '../types/types';

// export type AuthDispatch = React.Dispatch<AuthContextAction>;

// const AuthContext = createContext<AuthState>({} as AuthState);

// export interface AuthState {
//   isLoading: boolean;
//   user: User | null;
//   dispatch: AuthDispatch;
// }
// export type AuthContextAction =
//   | { type: 'RESTORE_USER'; user: User | null }
//   | { type: 'SIGN_IN'; user: User | null }
//   | { type: 'SIGN_OUT' };

// export const useAuthReducer = () => {
//   useReducer(
//     (prevState: AuthState, action: AuthContextAction) => {
//       switch (action.type) {
//         case 'RESTORE_USER':
//           return {
//             ...prevState,
//             isLoading: false,
//             user: action.user,
//           };
//         case 'SIGN_IN':
//           return {
//             ...prevState,
//             isLoading: false,
//             user: action.user,
//           };
//         case 'SIGN_OUT':
//           return {
//             ...prevState,
//             isLoading: false,
//             userObject: null,
//           };
//         default:
//           return prevState;
//       }
//     },
//     {
//       isLoading: true,
//       user: null,
//       dispatch: () => null,
//     },
//   );
// };

// export function AuthContextProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const authState = useAuthReducer();
//   const dispatch = useAuthReducer();

//   // Subscribe to auth state changes and restore the user if they're already signed in
//   useEffect(() => {
//     const unsubscribe = 1;
//     return unsubscribe;
//   }, [dispatch]);

//   const authContextValue = useMemo(
//     () => ({
//       ...authState,
//       dispatch,
//     }),
//     [authState, dispatch],
//   );

//   return (
//     <AuthContext.Provider value={authContextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
// // const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState<User | null>(null);

// //   useEffect(() => {
// //     // Check if the user is already authenticated
// //     setCurrentSession();
// //   }, []);

// //   const setCurrentSession = async () => {
// //     const { data } = await supabase.auth.getSession();
// //     if (data) {
// //       const currUser: User = await getCurrentUserInfo();
// //       setUser(currUser);
// //     } else {
// //       setUser(null);
// //     }
// //   };

// //   const signIn = async (email: string, password: string) => {
// //     const { user, error } = await supabase.auth.signIn(email, password);
// //     if (error) {
// //       console.error('Error signing in:', error.message);
// //     } else {
// //       setUser(user);
// //     }
// //   };

// //   const signOut = async () => {
// //     await supabase.auth.signOut();
// //     setUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, signIn, signOut }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   if (!context) {
// //     throw new Error('useAuth must be used within an AuthProvider');
// //   }
// //   return context;
// // };

// // export { AuthProvider, useAuth };
