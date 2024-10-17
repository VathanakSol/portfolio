'use client';

import { useEffect, useState } from 'react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// Fetch GitHub repositories
async function fetchGitHubRepos(username: string): Promise<[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) throw new Error('Failed to fetch repositories');
  return res.json();
}

interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{repo.name}</CardTitle>
        <CardDescription>{repo.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{repo.language}</Badge>
          <Badge variant="outline">⭐ {repo.stargazers_count}</Badge>
          <Badge variant="outline">🍴 {repo.forks_count}</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

function RepoSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-16" />
        </div>
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-32" />
      </CardFooter>
    </Card>
  );
}

function RepoList({ username }: { username: string }) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const data = await fetchGitHubRepos(username);
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => <RepoSkeleton key={i} />)}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo: Repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default function GitHubPage() {
  const username = 'VathanakSol'; 

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-center mb-8">
        <GitHubLogoIcon className="w-8 h-8 mr-2" />
        <h1 className="text-3xl font-bold">My GitHub Repositories</h1>
      </div>
      <RepoList username={username} />
    </div>
  );
}
