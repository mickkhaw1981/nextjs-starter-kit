"use client";

import AuthForm from "@/components/form/auth-form";
import { SignUpSchema } from "@/lib/validations";

export default function SignUp() {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={async (e) => {
        // TODO: Implement actual sign-in logic
        console.log("Sign up data:", e);
        return {
          success: false,
          message: "Authentication not implemented yet",
        };
      }}
    />
  );
}
