import { v4 } from 'uuid';

export type CaseId = number;
export type UserUid = string;

export type Uuid = typeof v4;

export type CaseCardProps = {
  id: CaseId;
  title: string;
  status: string;
  imageUrl?: string;
};
