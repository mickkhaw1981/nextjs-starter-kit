export type FormType = "LOG_IN" | "SIGN_UP";

export interface AuthFormConfig {
  title: string;
  description: string;
  buttonText: string;
  loadingText: string;
  socialButtonText: string;
  dividerText: string;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
  forgotPassword: boolean;
}

export const AUTH_FORM_CONFIG: Record<FormType, AuthFormConfig> = {
  LOG_IN: {
    title: "Login",
    description: "Welcome back!",
    buttonText: "Login",
    loadingText: "Logging in...",
    socialButtonText: "Continue with Google",
    dividerText: "Or",
    footerText: "Don't have an account?",
    footerLinkText: "Sign up",
    footerLinkHref: "/auth/sign-up",
    forgotPassword: true,
  },
  SIGN_UP: {
    title: "Sign up",
    description: "Create a new account",
    buttonText: "Sign up",
    loadingText: "Creating an account...",
    socialButtonText: "Continue with Google",
    dividerText: "Or",
    footerText: "Already have an account?",
    footerLinkText: "Login",
    footerLinkHref: "/auth/login",
    forgotPassword: false,
  },
};
