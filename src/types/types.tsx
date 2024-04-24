export type Uid = string;
export type CaseUid = Uid;
export type FormUid = Uid;
export type UserUid = Uid;
export type EligibilityUid = Uid;
export type UpdateUid = Uid;

export interface CasePartial {
  id: CaseUid;
  approved: boolean;
  title: string;
  briefSummary: string;
  description: string;
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
  id: CaseUid;
  imageUrl: string;
  briefSummary: string;
  lawFirm: string;
  description: string;
  date: Date;
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

export interface EligibilityRequirement {
  eligibilityUid: EligibilityUid;
  caseUid: CaseUid;
  requirement: string;
}

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

export interface Update {
  updateUid: UpdateUid;
  caseUid: CaseUid;
  title: string;
  blurb: string;
  category: string;
  date: Date;
  summary: string;
  lawFirm: string;
}

export enum GreenStatusOptions {
  'In Progress',
  'New Case',
  'Settled',
  'Appeal',
  'Payment Processing',
  'Payment Distributed',
}

export enum YellowStatusOptions {
  'Pending',
}

export enum RedStatusOptions {
  'Action Required',
}
