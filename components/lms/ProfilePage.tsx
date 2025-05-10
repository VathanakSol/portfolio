import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

export default async function ProfilePage() {
  // Fetch the current authenticated user
  const user = await currentUser();

  // Redirect to sign-in if the user is not authenticated
  if (!user) {
    redirect("/sign-in");
  }

  // Extract user details from Clerk
  const fullName = `${user.firstName} ${user.lastName}`;
  const email = user.emailAddresses[0]?.emailAddress || "No email found";
  const profileImageUrl = user.imageUrl;
  const userId = user.id;

  return (
    <div className="min-h-screen bg-muted/40 p-6">
      <div className="container mx-auto">
        {/* Profile Overview Section */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Profile Picture, Name, and Email */}
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
              <Image
                src={profileImageUrl}
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{fullName}</h1>
              <p className="text-muted-foreground">{email}</p>
              <p className="text-sm text-muted-foreground">User ID: {userId}</p>
            </div>
          </div>

          {/* Sign Out Button */}
          <SignOutButton>
            <Button className="bg-red-500 hover:ring-2 ring-1 ring-red-200 text-white hover:bg-red-600 transition-all ease-in-out">
              Sign Out
            </Button>
          </SignOutButton>
        </div>

        {/* Profile Information Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Details */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="text-lg font-semibold">{fullName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg font-semibold">{email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">User ID</p>
                  <p className="text-lg font-semibold">{userId}</p>
                </div>
              </div>

              {/* Achievement-Style UI */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Courses Completed
                  </p>
                  <p className="text-lg font-semibold">5</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Progress</p>
                  <Progress value={75} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-1">
                    75% Completed
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 shadow-sm hover:shadow-md transition-all">
                      <span className="mr-1">🏆</span>
                      <span className="font-medium">Top Learner</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 shadow-sm hover:shadow-md transition-all">
                      <span className="mr-1">🚀</span>
                      <span className="font-medium">Fast Starter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Explore More Courses Button */}
        <div className="mt-8 text-center">
          <Link href="/courses">
            <Button>Explore More Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
