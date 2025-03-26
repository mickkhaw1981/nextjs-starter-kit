"use client";

import AuthForm from "@/components/form/auth-form";
import { SignInSchema } from "@/lib/validations";

export default function SignIn() {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={async (e) => {
        // TODO: Implement actual sign-in logic
        console.log("Sign in data:", e);
        return {
          success: false,
          message: "Authentication not implemented yet",
        };
      }}
    />
  );
}
