import {createClient} from "@supabase/supabase-js";

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwY3F3cGtjbmN5dXB5dXR4enZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcwNzQ3MjQsImV4cCI6MTk2MjY1MDcyNH0.0FjHZNKYfJVU2BBvYXFFUHZ7R6T9CaKWyft-8LA2fL0'
const supabaseUrl = 'https://kpcqwpkcncyupyutxzve.supabase.co';

export const supabase = createClient(supabaseUrl, supabaseKey)