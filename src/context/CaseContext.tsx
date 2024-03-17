import React, { createContext, useEffect, useMemo, useReducer } from 'react';

import {
  fetchAllCases,
  fetchCasesOnActivity,
} from '../app/(BottomTabNavigation)/AllCases/utils';
import supabase from '../supabase/createClient';
import { Case } from '../types/types';

export const CaseContext = createContext<CaseState>({} as CaseState);

export interface CaseState {
  allCases: Case[];
  updateCases: React.Dispatch<React.SetStateAction<Case[]>>;
  loading: boolean;
  activeCases: Case[];
  inactiveCases: Case[];
}

export function CaseContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cases, setCases] = React.useState<Case[]>([]);
  const [active, setActive] = React.useState<Case[]>([]);
  const [inactive, setInactive] = React.useState<Case[]>([]);

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    const fetchCases = async () => {
      const user = await supabase.auth.getUser();
      if (user.data.user?.id) {
        const userId = user.data.user.id;
        const allCases = await fetchAllCases(userId);
        const actives = await fetchCasesOnActivity(userId, true);
        const inactives = await fetchCasesOnActivity(userId, false);
        setCases(allCases);
        setActive(actives);
        setInactive(inactives);
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
      activeCases: active,
      inactiveCases: inactive,
    }),
    [cases, setCases, isLoading],
  );

  return (
    <CaseContext.Provider value={caseContextValue}>
      {children}
    </CaseContext.Provider>
  );
}
