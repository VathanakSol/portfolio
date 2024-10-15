
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CoursesPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/learning/courses/containerization">
            <Card>
              <CardHeader>
                <CardTitle>Containerization</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Overview of Containerization</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/learning/courses/ansible">
            <Card>
              <CardHeader>
                <CardTitle>Ansible</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Overview of Ansible</p>
              </CardContent>
            </Card>
          </Link>
          {/* Add more course cards with appropriate links */}
        </div>
      </div>
    </main>
  );
}