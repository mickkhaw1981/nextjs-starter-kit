"use client";

import { useActionState } from "react";
import Image from "next/image";
import { signInWithGoogle } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";
import { ActionResponse } from "@/types/global";
import { useEffect } from "react";
import { toast } from "sonner";
import router from "next/router";

interface SocialAuthFormProps {
  className?: string;
  buttonText?: string;
  disabled?: boolean;
}

type GoogleAuthResponse = ActionResponse<{ redirectUrl: string }>;

const SocialAuthForm = ({
  className,
  buttonText = "Continue with Google",
  disabled = false,
}: SocialAuthFormProps) => {
  const [state, formAction] = useActionState<GoogleAuthResponse>(
    signInWithGoogle,
    { success: true, data: undefined }
  );

  useEffect(() => {
    if (state?.success && state.data?.redirectUrl) {
      window.location.href = state.data.redirectUrl;
    }
    if (state && !state.success && state.error) {
      toast.error(state.error.message);
    }
  }, [state, router]);

  return (
    <div className={className}>
      <form action={formAction}>
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
