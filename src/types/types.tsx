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

export interface User {
  id: UserUid;
  fullName: string;
  email: string;
  streetName: string;
  city: string;
  state: string;
  zip: string;
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
}
export const userInstance: User = {
  id: '',
  fullName: '',
  email: '',
  streetName: '',
  city: '',
  state: '',
  zip: '',
};
