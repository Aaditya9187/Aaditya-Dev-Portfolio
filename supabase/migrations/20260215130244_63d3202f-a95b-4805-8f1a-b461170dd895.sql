
-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Public can read published posts
CREATE POLICY "Anyone can view published posts"
ON public.blog_posts FOR SELECT
USING (published = true);

-- Authenticated owner can do everything
CREATE POLICY "Owner can insert posts"
ON public.blog_posts FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Owner can update posts"
ON public.blog_posts FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Owner can delete posts"
ON public.blog_posts FOR DELETE
USING (auth.uid() = user_id);

-- Owner can view their own drafts
CREATE POLICY "Owner can view own drafts"
ON public.blog_posts FOR SELECT
USING (auth.uid() = user_id);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
