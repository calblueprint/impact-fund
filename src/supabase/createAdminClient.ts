import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

if (
  !process.env.EXPO_PUBLIC_SUPABASE_URL ||
  !process.env.SUPABASE_SERVICE_KEY
) {
  throw new Error('Supabase environment variables are not defined.');
}
const supabaseAdmin = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
);

export default supabaseAdmin;
