import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL?.trim();
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY?.trim();

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or Anon Key");
}

try {
  new URL(supabaseUrl);
} catch (error) {
  throw new Error("Invalid Supabase URL");
}

if (!/^https?:\/\/.+/.test(supabaseUrl)) {
  throw new Error("Supabase URL must start with http:// or https://");
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      flowType: "pkce",
    },
  }
);
