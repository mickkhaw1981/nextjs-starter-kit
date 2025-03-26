"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import SocialAuthForm from "@/components/form/social-auth-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ROUTES from "@/constants/routes";
import { cn } from "@/lib/utils";
import { SignInSchema } from "@/lib/validations";

export type ActionResponse = {
  success: boolean;
  message: string;
};

type FormData = z.infer<typeof SignInSchema>;

interface AuthFormProps {
  schema: typeof SignInSchema;
  defaultValues: FormData;
  onSubmit: (data: FormData) => Promise<ActionResponse>;
  formType: "SIGN_IN" | "SIGN_UP";
  className?: string;
}

const AuthForm = ({
  schema,
  defaultValues,
  formType,
  onSubmit,
  className,
  ...props
}: AuthFormProps) => {
  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    await onSubmit(data);
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">
          {formType === "SIGN_IN" ? "Sign In" : "Sign Up"}
        </h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required {...form.register("email")} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            {...form.register("password")}
          />
          {formType === "SIGN_IN" && (
            <div className="flex justify-end">
              <a
                href="#"
                className="text-xs text-muted-foreground underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          )}
        </div>
        <Button type="submit" className="w-full">
          {buttonText}
        </Button>
        <SocialAuthForm className="grid gap-4" />
      </div>
      <div className="text-center text-sm">
        {formType === "SIGN_IN" ? (
          <>
            Don&apos;t have an account?{" "}
            <Link href={ROUTES.SIGN_UP} className="font-bold">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href={ROUTES.SIGN_IN} className="font-bold">
              Sign in
            </Link>
          </>
        )}
      </div>
    </form>
  );
};

export default AuthForm;
