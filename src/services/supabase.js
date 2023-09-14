import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pfayssqfmgwbcxvexgsn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmYXlzc3FmbWd3YmN4dmV4Z3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2ODc0NjUsImV4cCI6MjAwOTI2MzQ2NX0.UteNlEtDApRHBStk1VqcKrJksWYBu9Mwfw3T-8yX5J0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
