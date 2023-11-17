import React, { createContext, useEffect, useMemo, useReducer } from 'react';

import { fetchAllCases } from '../app/(BottomTabNavigation)/AllCases/utils';
import supabase from '../supabase/createClient';
import { Case } from '../types/types';

export const CaseContext = createContext<CaseState>({} as CaseState);

export interface CaseState {
  allCases: Case[];
  updateCases: React.Dispatch<React.SetStateAction<Case[]>>;
  loading: boolean;
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
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    fetchCases();
    // TODO: Might want to put something in dependency array when implementing refresh
  }, []);

  const caseContextValue = useMemo(
    () => ({
      allCases: cases,
      updateCases: setCases,
      loading: isLoading,
    }),
    [cases, setCases, isLoading],
  );

  return (
    <CaseContext.Provider value={caseContextValue}>
      {children}
    </CaseContext.Provider>
  );
}
