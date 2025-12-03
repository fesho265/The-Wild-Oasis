import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hwvahltplxuihznasklb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3dmFobHRwbHh1aWh6bmFza2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNTI0OTAsImV4cCI6MjA3NzcyODQ5MH0.D1sx2lQFdFzYva_6rsBDMWkxs_UUxhWt4gHE0QrXcKg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
