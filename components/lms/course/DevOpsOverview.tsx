import { Cpu, Award, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DevOpsOverview() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-slate-700 dark:text-blue-100">
                Total Courses
              </h3>
              <Cpu className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">
              24
            </p>
            <p className="text-sm text-slate-500 dark:text-blue-300 mt-1">
              Across 5 specializations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-slate-700 dark:text-blue-100">
                Certifications
              </h3>
              <Award className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">
              6
            </p>
            <p className="text-sm text-slate-500 dark:text-blue-300 mt-1">
              Industry-recognized
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-slate-700 dark:text-blue-100">
                Active Learners
              </h3>
              <Users className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">
              12.5k+
            </p>
            <p className="text-sm text-slate-500 dark:text-blue-300 mt-1">
              Worldwide community
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-blue-100">
          Your Learning Path
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-slate-700 dark:text-blue-100">
                DevOps Fundamentals
              </h3>
              <span className="text-sm text-blue-500 dark:text-blue-400">
                4/12 completed
              </span>
            </div>
            <Progress value={33} className="h-2 mb-4" />

            <div className="flex items-center text-sm text-slate-500 dark:text-blue-300 mb-4">
              <Clock className="h-4 w-4 mr-1" />
              <span>Estimated time: 3 weeks</span>
            </div>

            <Button className="w-full">Continue Learning</Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-blue-100">
            Popular Paths
          </h2>
          <Link href="/learning/devops/courses">
            <Button
              variant="ghost"
              className="text-blue-500 dark:text-blue-400"
            >
              View All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h3 className="font-medium text-slate-800 dark:text-blue-100 mb-2">
                CI/CD Pipeline Mastery
              </h3>
              <p className="text-sm text-slate-500 dark:text-blue-300 mb-4">
                Learn to build and optimize continuous integration and delivery
                pipelines
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500 dark:text-blue-300">
                  8 modules
                </span>
                <Button variant="outline" size="sm">
                  Start
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h3 className="font-medium text-slate-800 dark:text-blue-100 mb-2">
                Kubernetes for DevOps
              </h3>
              <p className="text-sm text-slate-500 dark:text-blue-300 mb-4">
                Master container orchestration with Kubernetes
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500 dark:text-blue-300">
                  10 modules
                </span>
                <Button variant="outline" size="sm">
                  Start
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
