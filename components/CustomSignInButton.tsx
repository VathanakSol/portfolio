"use client";

import { useSignIn } from "@clerk/nextjs";

export default function CustomSignInButton() {
  const { signIn } = useSignIn();

  const handleSignIn = async () => {
    if (!signIn) return;

    await signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/learning", // Custom redirect URL
      redirectUrlComplete: "/learning", // URL after the OAuth flow completes
    });
  };

  return (
    <button
      onClick={handleSignIn}
      className="bg-blue-500 text-white p-2 rounded"
    >
      Sign In with Google
    </button>
  );
}
