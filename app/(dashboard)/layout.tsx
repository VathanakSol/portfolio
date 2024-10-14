
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import "@/app/globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminSidebar from "@/components/AdminSidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <div className="flex h-screen bg-background">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto p-8">
              {children}
            </main>
            <ToastContainer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}