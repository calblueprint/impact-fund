import React, { createContext, useEffect, useMemo } from 'react';

import { fetchAllCases } from '../app/(BottomTabNavigation)/AllCases/utils';
import supabase from '../supabase/createClient';
import { uploadCase, leaveCase } from '../supabase/queries/cases';
import { Case, CaseUid } from '../types/types';

export const CaseContext = createContext<CaseState>({} as CaseState);

export interface CaseState {
  allCases: Case[];
  loading: boolean;
  addCase: (newCase: Case) => Promise<void>;
  removeCase: (targetCase: CaseUid) => Promise<void>;
}

export function CaseContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cases, setCases] = React.useState<Case[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    const fetchCases = async () => {
      const user = await supabase.auth.getUser();
      if (user.data.user?.id) {
        const userId = user.data.user.id;
        const allCases = await fetchAllCases(userId);
        setCases(allCases);
      }
      setIsLoading(false);
    };
    fetchCases();
    // TODO: Might want to put something in dependency array when implementing refresh
  }, []);

  async function addCase(newCase: Case) {
    try {
      await uploadCase(newCase.id);
      setCases([...cases, newCase]);
    } catch (error) {
      console.warn(error);
    }
  }

  async function removeCase(caseUid: CaseUid) {
    try {
      await leaveCase(caseUid);
      let targetIndex = -1;
      for (let i = 0; i < cases.length; i++) {
        if (cases[i].id === caseUid) {
          targetIndex = i;
        }
      }
      if (targetIndex > -1) {
        cases.splice(targetIndex, 1);
      }
    } catch (error) {
      console.warn(error);
    }
  }

  const caseContextValue = useMemo(
    () => ({
      allCases: cases,
      loading: isLoading,
      addCase,
      removeCase,
    }),
    [cases, setCases, isLoading],
  );

  return (
    <CaseContext.Provider value={caseContextValue}>
      {children}
    </CaseContext.Provider>
  );
}
