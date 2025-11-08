-- Fix send_subscriber_to_webhook to match pg_net (extensions.http_post) signature and harden errors
-- Also (re)create the trigger to ensure it fires on insert

-- 1) Update function
CREATE OR REPLACE FUNCTION public.send_subscriber_to_webhook()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  request_id bigint;
BEGIN
  BEGIN
    -- pg_net expects (url text, headers jsonb, body text) and returns bigint
    SELECT extensions.http_post(
      url := 'https://hook.us2.make.com/a8q18fc1k88knbvb4mx9z75redtgu3hx'::text,
      headers := jsonb_build_object('Content-Type', 'application/json'),
      body := jsonb_build_object(
        'id', NEW.id,
        'name', NEW.name,
        'email', NEW.email,
        'created_at', NEW.created_at
      )::text
    ) INTO request_id;
  EXCEPTION WHEN OTHERS THEN
    -- Do not block inserts if webhook fails; log a notice instead
    RAISE NOTICE 'Webhook error: %', SQLERRM;
  END;

  RETURN NEW;
END;
$$;

-- 2) Ensure trigger exists (drop if exists, then create)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_trigger t
    JOIN pg_class c ON c.oid = t.tgrelid
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE t.tgname = 'trg_newsletter_subscribers_webhook'
      AND n.nspname = 'public'
      AND c.relname = 'newsletter_subscribers'
  ) THEN
    EXECUTE 'DROP TRIGGER trg_newsletter_subscribers_webhook ON public.newsletter_subscribers';
  END IF;

  EXECUTE 'CREATE TRIGGER trg_newsletter_subscribers_webhook
    AFTER INSERT ON public.newsletter_subscribers
    FOR EACH ROW
    EXECUTE FUNCTION public.send_subscriber_to_webhook()';
END $$;