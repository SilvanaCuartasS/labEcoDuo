const { createClient } = require("@supabase/supabase-js");
// Create a single supabase client for interacting with your database
const supabase = createClient(
  
"NEXT_PUBLIC_SUPABASE_URL=https://pdgblcyxzeqkjsiptiwe.supabase.co",
"NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkZ2JsY3l4emVxa2pzaXB0aXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNjM3NTEsImV4cCI6MjA2MjczOTc1MX0.fWLJITGivQv-d6gwZF1efiZYCq-BcxiBA2TB5gB0dxM"
            
);

module.exports = supabase;
