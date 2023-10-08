import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://kvfpmjezholwvgdmabhr.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2ZnBtamV6aG9sd3ZnZG1hYmhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwNzAzMDIsImV4cCI6MjAxMDY0NjMwMn0.e6CFmLq4kjNnoGzHDd_hVSUZI6gHaDU-dWu_1Uhd6Mk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
