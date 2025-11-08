-- Fix the webhook trigger function to use net.http_post correctly
CREATE OR REPLACE FUNCTION public.send_subscriber_to_webhook()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  request_id bigint;
BEGIN
  BEGIN
    -- Use net.http_post with correct signature: (url text, body jsonb, headers jsonb)
    SELECT net.http_post(
      url := 'https://hook.us2.make.com/a8q18fc1k88knbvb4mx9z75redtgu3hx',
      body := jsonb_build_object(
        'id', NEW.id,
        'name', NEW.name,
        'email', NEW.email,
        'created_at', NEW.created_at
      ),
      headers := jsonb_build_object('Content-Type', 'application/json')
    ) INTO request_id;
    
    RAISE NOTICE 'Webhook sent successfully, request_id: %', request_id;
  EXCEPTION WHEN OTHERS THEN
    -- Do not block inserts if webhook fails
    RAISE NOTICE 'Webhook error: %', SQLERRM;
  END;

  RETURN NEW;
END;
$function$;

-- Remove duplicate trigger to prevent double webhook calls
DROP TRIGGER IF EXISTS trg_newsletter_subscribers_webhook ON public.newsletter_subscribers;