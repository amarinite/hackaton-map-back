import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ykuoaqjmfawmzwnvcgrd.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrdW9hcWptZmF3bXp3bnZjZ3JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMjYwMjcsImV4cCI6MjAxNTcwMjAyN30.HhIGo7D2cTtLLKMhA2x9Ul0m9D75pyEn2FCEIE5-3Fo';

const dbConnection = createClient(SUPABASE_URL, SUPABASE_KEY);

export default dbConnection;
