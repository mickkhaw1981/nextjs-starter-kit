"use server";

import { createClient } from "@/lib/supabase/server";
import handleError from "@/lib/handlers/error";
import { ActionResponse } from "@/types/global";

export async function signInWithGoogle(): Promise<
  ActionResponse<{ redirectUrl: string }>
> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.SITE_URL}/auth/callback`,
      },
    });

    if (error) {
      throw error;
    }

    if (!data.url) {
      throw new Error("Authentication failed: No redirect URL provided");
    }

    // Return the URL for client-side redirection
    return {
      success: true,
      data: { redirectUrl: data.url },
    };
  } catch (error) {
    // Return formatted error to client component
    return handleError(error) as ActionResponse<{ redirectUrl: string }>;
  }
}

export async function signOut(): Promise<ActionResponse<void>> {
  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    return {
      success: true,
      data: undefined,
    };
  } catch (error) {
    return handleError(error) as ActionResponse<void>;
  }
}
