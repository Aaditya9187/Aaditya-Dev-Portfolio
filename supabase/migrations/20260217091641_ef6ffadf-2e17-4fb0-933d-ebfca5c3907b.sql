
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}'::text[],
  github_url TEXT,
  live_url TEXT,
  cover_image TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Anyone can view projects
CREATE POLICY "Anyone can view projects" ON public.projects
  FOR SELECT USING (true);

-- Owner can insert
CREATE POLICY "Owner can insert projects" ON public.projects
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Owner can update
CREATE POLICY "Owner can update projects" ON public.projects
  FOR UPDATE USING (auth.uid() = user_id);

-- Owner can delete
CREATE POLICY "Owner can delete projects" ON public.projects
  FOR DELETE USING (auth.uid() = user_id);

-- Timestamp trigger
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
