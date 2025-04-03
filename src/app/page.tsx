import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex h-svh w-full flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button asChild>
        <Link href="/auth/login">Get Started</Link>
      </Button>
    </div>
  );
}
