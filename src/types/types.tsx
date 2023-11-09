export type Uid = string;
export type CaseUid = Uid;
export type FormUid = Uid;
export type UserUid = Uid;

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

export interface FormMetaData {
  id: FormUid;
  title: string;
  filename: string;
  date: Date;
}

export interface Form extends FormMetaData {
  formUrl: string;
}

export interface User {
  id: UserUid;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  addresss: string;
}
