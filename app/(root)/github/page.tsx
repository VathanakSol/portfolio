"use client";

import { useEffect, useState } from 'react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from 'next/link';

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
    created_at: string;
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
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('stars');
    
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(6); // Number of repos per page

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
                {[...Array(reposPerPage)].map((_, i) => <RepoSkeleton key={i} />)}
            </div>
        );
    }

    // Filter repositories based on search term
    const filteredRepos = repos.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
    );

    // Sort filtered repositories
    const sortedRepos = [...filteredRepos].sort((a, b) => {
        if (sortOption === 'stars') return b.stargazers_count - a.stargazers_count;
        if (sortOption === 'forks') return b.forks_count - a.forks_count;
        if (sortOption === 'dates') return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        return 0; 
    });

    // Pagination logic
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = sortedRepos.slice(indexOfFirstRepo, indexOfLastRepo);

    // Calculate total pages
    const totalPages = Math.ceil(sortedRepos.length / reposPerPage);

    return (
        <>
            {/* Search and Sort Controls */}
            <div className="mb-4 flex justify-between">
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Search Repositories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border p-2 rounded"
                    />
                    <Link href="/github/create-repo">
                        <Button className="bg-blue-500 px-2 text-white hover:bg-blue-400">
                            Create New Repository
                        </Button>
                    </Link>

                </div>
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="border p-2 rounded px-2"
                >
                    <option value="stars">Sort by Stars</option>
                    <option value="forks">Sort by Forks</option>
                    <option value="dates">Sort by Dates</option>
                </select>
            </div>

            {/* Display message if no repositories found */}
            {filteredRepos.length === 0 ? (
                <div className="text-center text-gray-500 h-[300px] grid place-content-center">
                    <p>No repositories found for &quot;<strong className="text-blue-500">{searchTerm}</strong>&quot;</p>
                </div>
            ) : (
                <>
                    {/* Repository Cards */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {currentRepos.map((repo: Repo) => (
                            <RepoCard key={repo.id} repo={repo} />
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center mt-4">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <Button 
                                key={i} 
                                onClick={() => setCurrentPage(i + 1)} 
                                className={`mx-1 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                {i + 1}
                            </Button>
                        ))}
                    </div>
                </>
            )}
        </>
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