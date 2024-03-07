// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// TODO: what's the diff btwn all of these LOL
// import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';
// import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

console.log('Hello from Functions!');

Deno.serve(async req => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    {
      global: {
        headers: { Authorization: req.headers.get('Authorization')! },
      },
    },
  );

  const { update, caseUUID } = await req.json();

  // TODO: this doesnt work (supabase.auth)
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser(); // rip why null

  // const userId = await supabase
  //   .from('users')
  //   .select('userId')
  //   .eq('userId', user.id);
  const userId = '63bc60bf-acdf-40c5-99f5-310a84f1583b';

  // const expoPushToken = await supabase
  //   .from('users')
  //   .select('expo_push_token')
  //   .eq('userId', user.id);
  const expoPushToken = 'ExponentPushToken[R5zzYfNdaOLI6-m33_7uK4]';

  const { data } = await supabase
    .from('status')
    .select('caseId')
    .eq('userId', userId);

  const caseIds = data.map(item => item.caseId);

  if (caseIds.includes(caseUUID)) {
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
  } else {
    // TODO: how to handle case where we dont want a notification?
    // cant do nothing bc errors: event loop error: TypeError: First argument to respondWith must be a Response or a promise resolving to a Response. at Object.respondWith (ext:deno_http/01_http.js:219:15) at eventLoopTick (ext:core/01_core.js:64:7)
    const res = { message: '' };
    return new Response(JSON.stringify(res), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/push' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"update":"put update here"}'

*/
