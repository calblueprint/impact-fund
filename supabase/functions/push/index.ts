// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

console.log('Hello from Functions!');

Deno.serve(async req => {
  const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    {
      global: {
        headers: { Authorization: req.headers.get('Authorization')! },
      },
    },
  );

  const { update } = await req.json();

  // console.log(update);

  // this doesn't work so im only able to hard code my expo push token rn :,)

  // const {
  //   data: { user },
  // } = await supabaseClient.auth.getUser(); // why is user null

  // console.log(user);

  // const { data } = await supabase.from('users').select().eq('userId', user.id);

  // const expoPushToken = data.expoPushToken;
  const expoPushToken = 'ExponentPushToken[R5zzYfNdaOLI6-m33_7uK4]';

  const res = await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Deno.env.get('EXPO_ACCESS_TOKEN')}`,
    },
    body: JSON.stringify({
      to: expoPushToken,
      sound: 'default',
      body: update,
    }),
  }).then(res => res.json());

  return new Response(JSON.stringify(res), {
    headers: { 'Content-Type': 'application/json' },
  });
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/push' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"update":"put update here"}'

*/
