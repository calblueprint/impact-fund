export type CaseUid = string;
export type UserUid = string;

export interface Case {
  id: CaseUid;
  approved: boolean;
  title: string;
  summary: string;
  image: string;
  caseSite: string;
  classClaimLink: string;
  individualClaimLink: string;
  caseStatus: CaseStatus;
}

export interface Profile {
  id: UserUid;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  mailingAddress: string;
}

export enum CaseStatus {
  NotStarted = 'Not Started',
  InProgress = 'In Progress',
  Settled = 'Settled',
  Canceled = 'Canceled',
}
