import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

console.log('Hello from Functions!');

interface Notification {
  id: string;
  user_id: string;
  body: string;
}

interface WebhookPayload {
  type: 'INSERT' | 'UPDATE' | 'DELETE';
  table: string;
  record: Notification;
  schema: 'public';
  old_record: null | Notification;
}

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

Deno.serve(async req => {
  const payload: WebhookPayload = await req.json();
  const { data } = await supabase
    .from('users')
    .select('expo_push_token')
    .eq('id', payload.record.user_id)
    .single();

  const res = await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Deno.env.get('EXPO_ACCESS_TOKEN')}`,
    },
    body: JSON.stringify({
      to: data?.expo_push_token,
      sound: 'default',
      body: payload.record.body,
    }),
  }).then(res => res.json());

  return new Response(JSON.stringify(res), {
    headers: { 'Content-Type': 'application/json' },
  });
});
