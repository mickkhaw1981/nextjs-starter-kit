"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4 text-center">
        {/* Auth Toggle Button */}
        <Button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          variant="outline"
          className="mb-8"
        >
          {isLoggedIn ? "Sign Out" : "Sign In"}
        </Button>

        {isLoggedIn ? (
          // Logged In View
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Welcome Back!</h1>
            <p className="font-roboto text-muted-foreground">
              You are logged in
            </p>
            <Link href="/buttons">
              <Button className="mt-2 bg-primary-500 dark:bg-primary-500 dark:text-white">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        ) : (
          // Logged Out View
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Welcome to Our App</h1>
            <p className="font-roboto text-muted-foreground">
              Please sign in to continue
            </p>
            <Link href={ROUTES.SIGN_UP}>
              <Button
                onClick={() => setIsLoggedIn(true)}
                className="mt-2 bg-primary-500 dark:bg-primary-500 dark:text-white"
              >
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
