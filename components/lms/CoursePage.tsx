import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

// Mock data for enrolled courses
const enrolledCourses = [
  {
    id: 1,
    title: "Network Fundamentals",
    progress: 75,
  },
  {
    id: 2,
    title: "Cloud Computing Essentials",
    progress: 30,
  },
  {
    id: 3,
    title: "Cybersecurity Fundamentals",
    progress: 10,
  },
];

export default async function HomePage() {
  // Fetch the current authenticated user
  const user = await currentUser();

  // Redirect to sign-in if the user is not authenticated
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-muted/40 p-6">
      <div className="container mx-auto">
        {/* Welcome Message with Sign Out button aligned to right */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome back, {user.firstName || "Learner"}!
            </h1>
            <p className="text-muted-foreground">
              Continue your learning journey.
            </p>
          </div>
          <SignOutButton>
            <Button className="bg-red-500 hover:ring-2 ring-1 ring-red-200 text-white hover:bg-red-600 transition-all ease-in-out">
              Sign Out
            </Button>
          </SignOutButton>
        </div>

        {/* Enrolled Courses */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {enrolledCourses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Progress
                  </span>
                  <span className="text-sm font-medium">
                    {course.progress}%
                  </span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

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
