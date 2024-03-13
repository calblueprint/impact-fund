// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

/**
 * Sets up a Deno edge function endpoint:
 * 1. Recieves a notification request from the database trigger.
 * 2. Parses the request and makes an HTTP post request to the Expo notifications handler.
 */
Deno.serve(async req => {
  // fetch the notifcation request from the supabase edge function
  const { update, expoPushToken } = await req.json();

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
