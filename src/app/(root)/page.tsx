import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold">Next.js Starter Kit with Inter</h1>
        <h1 className="font-roboto text-4xl font-bold">
          Next.js Starter Kit with Roboto
        </h1>
        <Link href="/buttons">
          <Button className="mx-auto">Go to Buttons</Button>
        </Link>
      </div>
    </main>
  );
}
