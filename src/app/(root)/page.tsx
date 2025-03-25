import { Space_Grotesk as SpaceGrotesk } from "next/font/google";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const spaceGrotesk = SpaceGrotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={spaceGrotesk.className}>
        <h1 className="text-4xl font-bold">Next.js Starter Kit</h1>
        <Link href="/buttons">
          <Button className="mx-auto">Go to Buttons</Button>
        </Link>
      </div>
    </main>
  );
}
