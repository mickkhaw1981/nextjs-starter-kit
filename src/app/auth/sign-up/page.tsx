"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { SignUpSchema } from "@/lib/validations";
import AuthForm from "@/components/form/auth-form";
import { FormType } from "@/constants/auth-form";

const SignUp = () => {
  const router = useRouter();

  const handleSignUp = async (values: { email: string; password: string }) => {
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        emailRedirectTo: `${window.location.origin}/protected`,
      },
    });

    if (error) throw error;
    router.push("/auth/sign-up-success");
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
