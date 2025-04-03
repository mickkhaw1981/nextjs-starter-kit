export interface SignInWithOAuthParams {
  provider: "google"; // Restrict to Google
  userData?: {
    id: string;
    email: string;
    avatar_url?: string;
    full_name?: string;
    picture?: string;
  };
}

export interface AuthCredentials {
  email: string;
  password: string;
}
