export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Cases: {
        Row: {
          approved: boolean | null;
          caseSite: string | null;
          caseStatus: Database['public']['Enums']['case_status'] | null;
          claimLink: string | null;
          id: number;
          image: string | null;
          optedIn: number;
          optedOut: number;
          optOutLink: string | null;
          summary: string | null;
          title: string | null;
        };
        Insert: {
          approved?: boolean | null;
          caseSite?: string | null;
          caseStatus?: Database['public']['Enums']['case_status'] | null;
          claimLink?: string | null;
          id?: number;
          image?: string | null;
          optedIn?: number;
          optedOut?: number;
          optOutLink?: string | null;
          summary?: string | null;
          title?: string | null;
        };
        Update: {
          approved?: boolean | null;
          caseSite?: string | null;
          caseStatus?: Database['public']['Enums']['case_status'] | null;
          claimLink?: string | null;
          id?: number;
          image?: string | null;
          optedIn?: number;
          optedOut?: number;
          optOutLink?: string | null;
          summary?: string | null;
          title?: string | null;
        };
        Relationships: [];
      };
      CasesNew: {
        Row: {
          approved: boolean;
          caseId: string;
          caseSite: string;
          caseStatus: Database['public']['Enums']['casestatus'];
          classActionClaimLink: string;
          image: string | null;
          individualClaimLink: string;
          summary: string;
          title: string;
        };
        Insert: {
          approved: boolean;
          caseId?: string;
          caseSite: string;
          caseStatus: Database['public']['Enums']['casestatus'];
          classActionClaimLink: string;
          image?: string | null;
          individualClaimLink: string;
          summary: string;
          title: string;
        };
        Update: {
          approved?: boolean;
          caseId?: string;
          caseSite?: string;
          caseStatus?: Database['public']['Enums']['casestatus'];
          classActionClaimLink?: string;
          image?: string | null;
          individualClaimLink?: string;
          summary?: string;
          title?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          first_name: string | null;
          full_name: string | null;
          id: string;
          last_name: string | null;
          mailingAddress: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          first_name?: string | null;
          full_name?: string | null;
          id: string;
          last_name?: string | null;
          mailingAddress?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          first_name?: string | null;
          full_name?: string | null;
          id?: string;
          last_name?: string | null;
          mailingAddress?: string | null;
        };
        Relationships: [];
      };
      status: {
        Row: {
          action: Database['public']['Enums']['caseaction'] | null;
          caseId: number;
          caseUUID: string;
          userId: string;
        };
        Insert: {
          action?: Database['public']['Enums']['caseaction'] | null;
          caseId: number;
          caseUUID?: string;
          userId: string;
        };
        Update: {
          action?: Database['public']['Enums']['caseaction'] | null;
          caseId?: number;
          caseUUID?: string;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'status_caseId_fkey';
            columns: ['caseId'];
            referencedRelation: 'Cases';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'status_userId_fkey';
            columns: ['userId'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      updates: {
        Row: {
          caseId: number;
          caseUUID: string | null;
          createdAt: string;
          updateId: string;
          updateInfo: string | null;
        };
        Insert: {
          caseId: number;
          caseUUID?: string | null;
          createdAt?: string;
          updateId: string;
          updateInfo?: string | null;
        };
        Update: {
          caseId?: number;
          caseUUID?: string | null;
          createdAt?: string;
          updateId?: string;
          updateInfo?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'updates_caseId_fkey';
            columns: ['caseId'];
            referencedRelation: 'Cases';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'updates_caseUUID_fkey';
            columns: ['caseUUID'];
            referencedRelation: 'CasesNew';
            referencedColumns: ['caseId'];
          },
        ];
      };
      users: {
        Row: {
          address: string | null;
          email: string | null;
          firstName: string | null;
          id: number;
          lastName: string | null;
        };
        Insert: {
          address?: string | null;
          email?: string | null;
          firstName?: string | null;
          id?: number;
          lastName?: string | null;
        };
        Update: {
          address?: string | null;
          email?: string | null;
          firstName?: string | null;
          id?: number;
          lastName?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      case_action: 'Opted In' | 'Opted Out';
      case_status: 'Not Started' | 'In Progress' | 'Settled' | 'Cancelled';
      caseaction: 'INDIVIDUAL' | 'CLASS' | 'NOT_ELIGIBLE';
      casestatus: 'IN_PROGRESS' | 'NOT_STARTED' | 'SETTLED' | 'CANCELED';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
