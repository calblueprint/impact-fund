export type CaseUid = string;
export type UserUid = string;

export type Case = {
  id: CaseUid;
  approved: boolean;
  title: string;
  blurb: string;
  summary: string;
  image: string;
  caseSite: string;
  claimLink: string;
  optOutLink: string;
  caseStatus: string;
  date: Date;
  lawFirm: string;
};

export type User = {
  id: UserUid;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  addresss: string;
};

export type Status = {
  id: CaseUid;
  userId: UserUid;
  eligible: Eligibility;
  excluded: boolean;
};

export enum Eligibility {
  ELIGIBLE,
  INELIGIBLE,
  UNDETERMINED,
}
