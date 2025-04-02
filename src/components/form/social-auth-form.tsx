"use client";

import Image from "next/image";
import { signInWithGoogle } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";

interface SocialAuthFormProps {
  className?: string;
  buttonText?: string;
  disabled?: boolean;
}

const SocialAuthForm = ({
  className,
  buttonText = "Continue with Google",
  disabled = false,
}: SocialAuthFormProps) => {
  return (
    <div className={className}>
      <form action={signInWithGoogle}>
        <Button
          type="submit"
          variant="outline"
          className="flex w-full items-center justify-center"
          disabled={disabled}
        >
          <Image
            src="/icons/google.svg"
            alt="Google Logo"
            width={20}
            height={20}
            className="mr-2.5 object-contain"
          />
          <span>{buttonText}</span>
        </Button>
      </form>
    </div>
  );
};

export default SocialAuthForm;
