export type CaseId = number;
export type UserUid = string;

export type CaseCardProps = {
  id: CaseId;
  title: string;
  status: string;
  imageUrl?: string;
};
