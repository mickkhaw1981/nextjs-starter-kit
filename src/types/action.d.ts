interface SignInWithOAuthParams {
  provider: "github" | "google";
  providerAccountId: string;
  user: {
    email: string;
    name: string;
    image: string;
  };
}

interface AuthCredentials {
  email: string;
  password: string;
}
