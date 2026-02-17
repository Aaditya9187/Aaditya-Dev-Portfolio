
CREATE TABLE public.certificates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  issuer TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view certificates" ON public.certificates FOR SELECT USING (true);
CREATE POLICY "Owner can insert certificates" ON public.certificates FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Owner can update certificates" ON public.certificates FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Owner can delete certificates" ON public.certificates FOR DELETE USING (auth.uid() = user_id);

CREATE TRIGGER update_certificates_updated_at
BEFORE UPDATE ON public.certificates
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
