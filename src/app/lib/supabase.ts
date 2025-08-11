import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPERBASE_PUBLIC_URL || 'https://gpjpobaiboizgnfonxam.supabase.co'
const supabaseKey =  process.env.SUPERBASE_PUBLIC_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwanBvYmFpYm9pemduZm9ueGFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4NjQyMDUsImV4cCI6MjA3MDQ0MDIwNX0.LF80ankibJKQ1PHJAauYRsTFZxRpPFDE5b4xvry--Uw'
export const supabase = createClient(supabaseUrl, supabaseKey)