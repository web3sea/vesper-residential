-- Fix the webhook trigger function with correct pg_net parameter syntax
CREATE OR REPLACE FUNCTION public.send_subscriber_to_webhook()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  request_id bigint;
BEGIN
  -- Send HTTP POST request to webhook with subscriber data
  SELECT extensions.http_post(
    url => 'https://hook.us2.make.com/a8q18fc1k88knbvb4mx9z75redtgu3hx',
    headers => '{"Content-Type": "application/json"}'::jsonb,
    body => jsonb_build_object(
      'id', NEW.id,
      'name', NEW.name,
      'email', NEW.email,
      'created_at', NEW.created_at
    )
  ) INTO request_id;
  
  RETURN NEW;
END;
$$;