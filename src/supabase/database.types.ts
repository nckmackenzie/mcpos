export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          address: string | null
          city: string | null
          companyName: string
          contact: string
          contactPerson: string
          country: string
          createdAt: string | null
          email: string
          id: string
          postalCode: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          companyName?: string
          contact?: string
          contactPerson?: string
          country?: string
          createdAt?: string | null
          email?: string
          id?: string
          postalCode?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          companyName?: string
          contact?: string
          contactPerson?: string
          country?: string
          createdAt?: string | null
          email?: string
          id?: string
          postalCode?: string | null
        }
        Relationships: []
      }
      currencies: {
        Row: {
          code: string
          name: string | null
        }
        Insert: {
          code?: string
          name?: string | null
        }
        Update: {
          code?: string
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
