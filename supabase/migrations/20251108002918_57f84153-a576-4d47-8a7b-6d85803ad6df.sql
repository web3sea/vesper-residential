-- Update function to include explicit search_path setting
CREATE OR REPLACE FUNCTION public.send_subscriber_to_webhook()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Send HTTP POST request to webhook with subscriber data
  PERFORM net.http_post(
    url := 'https://hook.us2.make.com/a8q18fc1k88knbvb4mx9z75redtgu3hx',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := jsonb_build_object(
      'id', NEW.id,
      'name', NEW.name,
      'email', NEW.email,
      'created_at', NEW.created_at
    )
  );
  
  RETURN NEW;
END;
$$;