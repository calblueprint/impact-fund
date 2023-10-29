export type CaseUid = string;
export type UserUid = string;

export interface Case {
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
}

export type CaseFormsProps = {
  id: CaseUid;
  caseSite: string;
};

export interface User {
  id: UserUid;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  addresss: string;
}
