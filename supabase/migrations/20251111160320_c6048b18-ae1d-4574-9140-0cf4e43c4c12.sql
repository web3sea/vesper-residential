-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create storage bucket for carousel images
INSERT INTO storage.buckets (id, name, public)
VALUES ('carousel-images', 'carousel-images', true);

-- Allow anyone to view images in the bucket
CREATE POLICY "Public Access to carousel images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'carousel-images');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload carousel images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'carousel-images');

-- Allow authenticated users to update their uploads
CREATE POLICY "Authenticated users can update carousel images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'carousel-images');

-- Allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete carousel images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'carousel-images');

-- Create table to store image metadata
CREATE TABLE public.carousel_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT,
  description TEXT,
  image_url TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.carousel_images ENABLE ROW LEVEL SECURITY;

-- Allow everyone to view active carousel images
CREATE POLICY "Anyone can view active carousel images"
ON public.carousel_images
FOR SELECT
USING (is_active = true);

-- Allow admins to insert carousel images
CREATE POLICY "Admins can insert carousel images"
ON public.carousel_images
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'));

-- Allow admins to update carousel images
CREATE POLICY "Admins can update carousel images"
ON public.carousel_images
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'))
WITH CHECK (has_role(auth.uid(), 'admin'));

-- Allow admins to delete carousel images
CREATE POLICY "Admins can delete carousel images"
ON public.carousel_images
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_carousel_images_updated_at
BEFORE UPDATE ON public.carousel_images
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster ordering queries
CREATE INDEX idx_carousel_images_order ON public.carousel_images(display_order) WHERE is_active = true;