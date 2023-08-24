import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://avkfvdevwjbatugaiqzo.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2a2Z2ZGV2d2piYXR1Z2FpcXpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NzM2ODYsImV4cCI6MjAwNzM0OTY4Nn0.sU-p1pqIdbaWaU4U2a3P_7YF-7eRrJLTv3mn0YEtPHU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
