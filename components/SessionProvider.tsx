
"use client";

import { Session } from "next-auth";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

interface SessionProviderProps {
  children: React.ReactNode;
  session: Session | null; // You can replace 'any' with a more specific type if needed
}

const SessionProvider = ({ children, session }: SessionProviderProps) => {
  return (
    <NextAuthSessionProvider session={session}>
      {children}
    </NextAuthSessionProvider>
  );
};

export default SessionProvider;