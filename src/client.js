import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://gwwbvsykmmvdqxlwjoxz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzUzMjk5OSwiZXhwIjoxOTUzMTA4OTk5fQ.v5_42TddWEw1SvcghNCdPDmBAK_JtLIkNTIbPS-AxAo'
);
