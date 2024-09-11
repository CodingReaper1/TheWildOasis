import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pgqopytnbkjovvnwtvun.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBncW9weXRuYmtqb3Z2bnd0dnVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MDU5ODMsImV4cCI6MjAzMTI4MTk4M30.aQxwchITD92kTab7pGJBOjr1J02QxdGP3ligcbzxAg8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
