"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth.action";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const result = await signOut();
    if (result.success) {
      router.push("/");
    }
  };

  return <Button onClick={handleLogout}>Log out</Button>;
}
