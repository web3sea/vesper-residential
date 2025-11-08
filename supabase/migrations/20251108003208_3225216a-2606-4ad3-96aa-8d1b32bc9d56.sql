-- Add UPDATE policy to newsletter_subscribers - only admins can update
CREATE POLICY "Only admins can update subscribers" 
ON public.newsletter_subscribers 
FOR UPDATE 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Add DELETE policy to newsletter_subscribers - only admins can delete
CREATE POLICY "Only admins can delete subscribers" 
ON public.newsletter_subscribers 
FOR DELETE 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));