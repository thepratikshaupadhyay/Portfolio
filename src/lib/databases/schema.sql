CREATE TABLE public.contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

GRANT INSERT ON TABLE public.contacts TO anon;

ALTER TABLE public.contacts
ENABLE ROW LEVEL SECURITY;


CREATE POLICY "Allow public contact submissions"
ON public.contacts
FOR INSERT
TO anon
WITH CHECK (true);