export type Uid = string;
export type CaseUid = Uid;
export type FormUid = Uid;
export type UserUid = Uid;

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
  formCount: number;
  featuredFormName: string;
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

export interface FormPartial {
  formUid: FormUid;
  caseUid: CaseUid;
  title: string;
  filename: string;
  date: Date;
}

export interface Form extends FormPartial {
  formUrl: string;
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
