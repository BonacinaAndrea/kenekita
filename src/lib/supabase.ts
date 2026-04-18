import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export type ContactRequest = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  locale: string;
};

export type BookingRequest = {
  id: string;
  created_at: string;
  property_slug: string;
  name: string;
  email: string;
  phone?: string;
  check_in: string;
  check_out: string;
  guests: number;
  message?: string;
  locale: string;
};
