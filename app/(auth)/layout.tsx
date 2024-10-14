
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import "@/app/globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <div className="flex h-screen bg-background">
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
            <ToastContainer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}