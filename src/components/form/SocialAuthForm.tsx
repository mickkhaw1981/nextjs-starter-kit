"use client";

import Image from "next/image";

import { Button } from "@/components/ui/Button";

interface SocialAuthFormProps {
  className?: string;
}

const SocialAuthForm = ({ className }: SocialAuthFormProps) => {
  const handleGithubLogin = async () => {
    // TODO: Implement GitHub authentication logic
    console.log("GitHub login clicked");
  };

  const handleGoogleLogin = async () => {
    // TODO: Implement Google authentication logic
    console.log("Google login clicked");
  };

  return (
    <div className={className}>
      <div className="relative z-0 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-xs text-muted-foreground">
          Or continue with
        </span>
      </div>
      <Button
        type="button"
        variant="outline"
        className="flex w-full items-center justify-center"
        onClick={handleGithubLogin}
      >
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        className="flex w-full items-center justify-center"
        onClick={handleGoogleLogin}
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
  );
};

export default SocialAuthForm;
