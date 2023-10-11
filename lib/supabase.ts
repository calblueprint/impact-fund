import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (process.env.SUPABASE_URL ? process.env.SUPABASE_URL : '' )
const supabaseAnonKey = (process.env.SUPABASE_ANON_KEY ? process.env.SUPABASE_ANON_KEY : '' )

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export default supabase;
