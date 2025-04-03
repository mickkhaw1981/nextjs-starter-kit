"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LogInSchema } from "@/lib/validations";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import AuthForm from "@/components/form/auth-form";
import { AuthCredentials } from "@/types/action";
import { ActionResponse } from "@/types/global";

const LogIn = () => {
  const router = useRouter();

  const handleLogin = async (
    params: AuthCredentials
  ): Promise<ActionResponse<void>> => {
    try {
      // Validate credentials against schema
      const validationResult = LogInSchema.safeParse(params);
      if (!validationResult.success) {
        throw new ValidationError(validationResult.error.flatten().fieldErrors);
      }

      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email: params.email,
        password: params.password,
      });

      if (error) {
        throw error;
      }

      router.push("/protected");
      return { success: true };
    } catch (error) {
      return handleError(error) as ActionResponse<void>;
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm drop-shadow-lg">
        <AuthForm
          formType="LOG_IN"
          schema={LogInSchema}
          defaultValues={{ email: "", password: "" }}
          onSubmit={handleLogin}
        />
      </div>
    </div>
  );
};

export default LogIn;
