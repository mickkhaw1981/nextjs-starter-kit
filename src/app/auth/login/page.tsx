"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LogInSchema } from "@/lib/validations";
import AuthForm from "@/components/form/auth-form";
import { FormType } from "@/constants/auth-form";

const LogIn = () => {
  const router = useRouter();

  const handleLogin = async (values: { email: string; password: string }) => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) throw error;
    router.push("/protected");
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
