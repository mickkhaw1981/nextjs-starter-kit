"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ROUTES from "@/constants/routes";
import { cn } from "@/lib/utils";

export function AuthForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
          <div className="flex justify-end">
            <a
              href="#"
              className="text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button
          variant="outline"
          className="flex w-full items-center justify-center"
        >
          <Image
            src="/icons/github.svg"
            alt="Github Logo"
            width={20}
            height={20}
            className="mr-2.5 object-contain"
          />
          <span>Log in with Github</span>
        </Button>
        <Button
          variant="outline"
          className="flex w-full items-center justify-center"
        >
          <Image
            src="/icons/google.svg"
            alt="Google Logo"
            width={20}
            height={20}
            className="mr-2.5 object-contain"
          />
          <span>Log in with Google</span>
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href={ROUTES.SIGN_UP} className="font-bold">
          Sign up
        </Link>
      </div>
    </form>
  );
}
