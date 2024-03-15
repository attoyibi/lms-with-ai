// lib/supabase/index.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xfxjjkzgivgjvrsslmpp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeGpqa3pnaXZnanZyc3NsbXBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2NDMzMDksImV4cCI6MjAxODIxOTMwOX0.nEiaNTl_Xs5V1-CDQkIUDIqY--FYQin5cuEP5vTCgdo';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
