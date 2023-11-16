import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ycgpbcnrrpohhsmanwtf.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljZ3BiY25ycnBvaGhzbWFud3RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMzA5MDYsImV4cCI6MjAxNTcwNjkwNn0.kZwZ6jAF3VMLiGReczPKsOMHlK9Lux15Sy3Qw0KWfNo';

const db = createClient(SUPABASE_URL, SUPABASE_KEY);

export default db;
