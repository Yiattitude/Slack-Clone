import { convexAuth } from "@convex-dev/auth/server";
import Github from "@auth/core/providers/github";

// Configure providers with credentials from environment variables.
// Create a GitHub OAuth App and set the callback to
// http://localhost:3000/api/auth/callback/github (for local dev)
// and set GITHUB_ID and GITHUB_SECRET in your environment (.env.local).
export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Github({
      // Accept both GITHUB_ID/GITHUB_SECRET and AUTH_GITHUB_ID/AUTH_GITHUB_SECRET
      clientId:
        process.env.GITHUB_ID ?? process.env.AUTH_GITHUB_ID ?? "",
      clientSecret:
        process.env.GITHUB_SECRET ?? process.env.AUTH_GITHUB_SECRET ?? "",
    }),
  ],
  
});
