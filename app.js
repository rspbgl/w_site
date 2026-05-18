/* ================================================================
   app.js — Backend & Supabase Integration
   Ravin & Serene Wedding Website
   ================================================================
   This file is your backend integration layer.
   Wire up Supabase here when you're ready to go live.

   SETUP STEPS:
   ─────────────────────────────────────────────────────────────
   1. Create a Supabase project at https://supabase.com

   2. Add the Supabase CDN script to index.html <head>:
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

   3. Fill in your project credentials below and uncomment.

   4. In index.html, find the comment:
        // ── Simulated delay — replace with Supabase call ──
      and replace it with:
        const { error } = await window.db.from('rsvp_responses').insert([rsvpData]);
        if (error) throw error;

   TABLE SCHEMA (run this SQL in Supabase → SQL Editor):
   ─────────────────────────────────────────────────────────────
     create table rsvp_responses (
       id                   uuid default gen_random_uuid() primary key,
       guest_name           text not null,
       guest_email          text,
       attendance_status    text not null,
       guest_count          integer default 1,
       dietary_restrictions text,
       message              text,
       submitted_at         timestamptz default now()
     );
   ================================================================ */


// ── Supabase client initialisation ──────────────────────────────
// Uncomment and fill in your credentials when ready:

// const SUPABASE_URL  = "https://your-project-ref.supabase.co";
// const SUPABASE_KEY  = "your-anon-public-key";

// window.db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ── Future backend utilities go below this line ─────────────────
