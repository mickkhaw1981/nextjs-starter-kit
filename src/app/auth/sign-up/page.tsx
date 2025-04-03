"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { SignUpSchema } from "@/lib/validations";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import AuthForm from "@/components/form/auth-form";
import { AuthCredentials } from "@/types/action";
import { ActionResponse } from "@/types/global";

const SignUp = () => {
  const router = useRouter();

  const handleSignUp = async (
    params: AuthCredentials
  ): Promise<ActionResponse<void>> => {
    try {
      // Validate credentials against schema
      const validationResult = SignUpSchema.safeParse(params);
      if (!validationResult.success) {
        throw new ValidationError(validationResult.error.flatten().fieldErrors);
      }

      const supabase = createClient();
      const { error } = await supabase.auth.signUp({
        email: params.email,
        password: params.password,
        options: {
          emailRedirectTo: `${window.location.origin}/protected`,
        },
      });

      if (error) {
        throw error;
      }

      router.push("/auth/sign-up-success");
      return { success: true };
    } catch (error) {
      return handleError(error) as ActionResponse<void>;
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm drop-shadow-lg">
        <AuthForm
          formType="SIGN_UP"
          schema={SignUpSchema}
          defaultValues={{ email: "", password: "" }}
          onSubmit={handleSignUp}
        />
      </div>
    </div>
  );
};

export default SignUp;
