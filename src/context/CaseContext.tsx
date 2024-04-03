import React, { createContext, useEffect, useMemo } from 'react';

import {
  fetchAllCases,
  fetchCasesOnActivity,
} from '../app/(BottomTabNavigation)/AllCases/utils';
import supabase from '../supabase/createClient';
import { Case, CaseUid } from '../types/types';

export const CaseContext = createContext<CaseState>({} as CaseState);

export interface CaseState {
  allCases: Case[];
  updateCases: React.Dispatch<React.SetStateAction<Case[]>>;
  loading: boolean;
  addCase: (newCase: Case) => void;
  removeCase: (targetCase: CaseUid) => void;
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

  function addCase(newCase: Case) {
    setCases([...cases, newCase]);
  }

  function removeCase(caseUid: CaseUid) {
    let targetIndex = -1;
    for (let i = 0; i < cases.length; i++) {
      if (cases[i].id === caseUid) {
        targetIndex = i;
      }
    }
    console.log(cases, targetIndex);
    if (targetIndex > -1) {
      cases.splice(targetIndex, 1);
    }
    console.log(cases);
  }

  const caseContextValue = useMemo(
    () => ({
      allCases: cases,
      updateCases: setCases,
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
