"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import SocialAuthForm from "@/components/form/social-auth-form";
import { AUTH_FORM_CONFIG, FormType } from "@/constants/auth-form";
import { AuthCredentials } from "@/types/action";
import { ActionResponse } from "@/types/global";

// Define the auth form fields
interface AuthFormProps {
  formType: FormType;
  schema: z.ZodType<AuthCredentials>;
  defaultValues: AuthCredentials;
  onSubmit: (values: AuthCredentials) => Promise<ActionResponse<void>>;
  className?: string;
}

export function AuthForm({
  formType,
  schema,
  defaultValues,
  onSubmit,
  className,
  ...props
}: AuthFormProps & Omit<React.ComponentPropsWithoutRef<"div">, "onSubmit">) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthCredentials>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const processSubmit = async (data: AuthCredentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await onSubmit(data);
      if (!response.success && response.error) {
        setError(response.error.message);
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Get config based on form type
  const currentConfig = AUTH_FORM_CONFIG[formType];

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{currentConfig.title}</CardTitle>
          <CardDescription>{currentConfig.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <SocialAuthForm
              buttonText={currentConfig.socialButtonText}
              disabled={isLoading}
            />

            <div className="relative z-0 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-background px-2 text-xs text-muted-foreground">
                {currentConfig.dividerText}
              </span>
            </div>

            <form onSubmit={handleSubmit(processSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message as string}
                    </p>
                  )}
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading
                    ? currentConfig.loadingText
                    : currentConfig.buttonText}
                </Button>

                {currentConfig.forgotPassword && (
                  <div className="text-center text-sm">
                    <Link href="/auth/forgot-password" className="inline-block">
                      Forgot your password?
                    </Link>
                  </div>
                )}

                <div
                  className={cn(
                    "text-center text-sm",
                    currentConfig.forgotPassword ? "mt-0" : "mt-4"
                  )}
                >
                  {currentConfig.footerText}{" "}
                  <Link
                    href={currentConfig.footerLinkHref}
                    className="font-semibold"
                  >
                    {currentConfig.footerLinkText}
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AuthForm;
