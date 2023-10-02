import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ryfhoebszdjwdsoibokl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5ZmhvZWJzemRqd2Rzb2lib2tsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNTA3NzQsImV4cCI6MjAxMTcyNjc3NH0.lvbVpKipYcnF-KBEo3ESNqtTPHJm1ijNppKRHWO48Ds";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
