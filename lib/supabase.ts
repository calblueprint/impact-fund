import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@env";
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Supabase environment variables are not defined.');
}
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
