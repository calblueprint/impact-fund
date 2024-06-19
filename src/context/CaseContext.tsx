import React, {
  createContext,
  useEffect,
  useMemo,
  useContext,
  useState,
} from 'react';

import { fetchAllCases } from '../app/(BottomTabNavigation)/AllCases/utils';
import supabase from '../supabase/createClient';
import { Case, CaseUid, ClaimStatus, UserUid } from '../types/types';

export interface CaseState {
  allCases: Case[];
  loading: boolean;
  joinCase: (newCase: Case) => Promise<void>;
  leaveCase: (targetCase: CaseUid) => Promise<void>;
  getClaimStatus: (caseId: CaseUid) => Promise<ClaimStatus>;
  updateClaimStatus: (caseId: CaseUid, status: ClaimStatus) => Promise<void>;
}

export const CaseContext = createContext<CaseState>({} as CaseState);

export function useCaseContext() {
  return useContext(CaseContext);
}

export function CaseContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cases, setCases] = useState<Case[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userId, setUserId] = useState<UserUid>();

  useEffect(() => {
    const fetchCases = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        const allCases = await fetchAllCases(data.user.id);
        setUserId(data.user.id);
        setCases(allCases);
      }
      setIsLoading(false);
    };
    fetchCases();
  }, []);

  /**
   * Add this case to a user's list of cases, both locally and on supabase.
   * @param newCase case being joined.
   */
  async function joinCase(newCase: Case) {
    try {
      if (isLoading || !userId) {
        throw new Error('User not found');
      }
      if (userId) {
        await supabase.from('status').insert({ caseId: newCase.id, userId });
        setCases([...cases, newCase]);
      }
    } catch (error) {
      console.warn('(joinCase)', error);
      throw error;
    }
  }

  /**
   * Remove this case from a user's list of cases, both locally and on supabase.
   * @param caseId case being removed.
   */
  async function leaveCase(caseId: CaseUid) {
    try {
      if (isLoading || !userId) {
        throw new Error('User not found');
      }
      await supabase
        .from('status')
        .delete()
        .eq('userId', userId)
        .eq('caseId', caseId);

      let targetIndex = -1;
      for (let i = 0; i < cases.length; i++) {
        if (cases[i].id === caseId) {
          targetIndex = i;
        }
      }
      if (targetIndex > -1) {
        cases.splice(targetIndex, 1);
      }
    } catch (error) {
      console.warn('(leaveCase)', error);
      throw error;
    }
  }

  /**
   * Fetch the claim status for the user in a given `caseId`.
   * @param caseId target case.
   * @returns object describing the claim status.
   */
  async function getClaimStatus(caseId: CaseUid): Promise<ClaimStatus> {
    try {
      if (isLoading || !userId) {
        throw new Error('User not found');
      }
      const { data } = await supabase
        .from('status')
        .select()
        .eq('userId', userId)
        .eq('caseId', caseId);
      if (!data) {
        throw new Error('Claim status not found');
      }
      return data[0].claimStatus;
    } catch (error) {
      console.warn('(getClaimStatus)', error);
      throw error;
    }
  }

  /**
   * Update the user's claim status for a given `caseId`.
   * @param caseId specified caseId
   * @param status status to be updated in the specific User/Case row
   */
  async function updateClaimStatus(
    caseId: CaseUid,
    status: ClaimStatus,
  ): Promise<void> {
    try {
      if (isLoading || !userId) {
        throw new Error('User not found');
      }
      await supabase
        .from('status')
        .update({ claimStatus: status })
        .eq('userId', userId)
        .eq('caseId', caseId);
    } catch (error) {
      console.warn('(updateClaimStatus)', error);
      throw error;
    }
  }

  const caseContextValue = useMemo(
    () => ({
      allCases: cases,
      loading: isLoading,
      joinCase,
      leaveCase,
      getClaimStatus,
      updateClaimStatus,
    }),
    [cases, setCases, isLoading],
  );

  return (
    <CaseContext.Provider value={caseContextValue}>
      {children}
    </CaseContext.Provider>
  );
}
