export type CaseUid = string;
export type UserUid = string;

export interface CasePartial {
  id: CaseUid;
  approved: boolean;
  title: string;
  blurb: string;
  summary: string;
  caseSite: string;
  claimLink: string;
  optOutLink: string;
  caseStatus: string;
  date: Date;
  lawFirm: string;
}

<<<<<<< HEAD
export interface Case extends CasePartial {
  imageUrl: string;
}

export interface CaseSummaryProps {
  blurb: string;
  summary: string;
  imageUrl: string;
  caseSite: string;
  date: Date;
  lawFirm: string;
}

=======
>>>>>>> c4b9f38 ([schema] update code to reflect schema changes (#20))
export interface User {
  id: UserUid;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  addresss: string;
<<<<<<< HEAD
}

export type Status = {
  id: CaseUid;
  userId: UserUid;
  eligible: Eligibility;
  excluded: boolean;
};

export enum Eligibility {
  ELIGIBLE = 'ELIGIBLE',
  INELIGIBLE = 'INELIGIBLE',
  UNDETERMINED = 'UNDETERMINED',
=======
>>>>>>> c4b9f38 ([schema] update code to reflect schema changes (#20))
}
