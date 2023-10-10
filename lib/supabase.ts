import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import 'react-native-url-polyfill/auto';

const [supabaseUrl, setSupabaseUrl] = useState<string>('');
const [supabaseAnonKey, setSupabaseAnonKey] = useState<string>('');

if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
  setSupabaseUrl(process.env.SUPABASE_URL);
  setSupabaseAnonKey(process.env.SUPABASE_ANON_KEY);
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
