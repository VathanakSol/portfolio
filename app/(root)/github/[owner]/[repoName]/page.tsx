'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { StarIcon, CalendarIcon } from '@radix-ui/react-icons'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { EyeIcon, GitForkIcon } from 'lucide-react'
import Link from 'next/link'

interface RepoDetails {
    name: string
    description: string
    language: string
    stargazers_count: number
    forks_count: number
    watchers_count: number
    html_url: string
    created_at: string
    updated_at: string
    owner: {
        login: string
        avatar_url: string
    }
    topics: string[]
    readme: string
}

async function fetchRepoDetails(owner: string, repo: string): Promise<RepoDetails> {
    const [repoRes, readmeRes] = await Promise.all([
        fetch(`https://api.github.com/repos/${owner}/${repo}`),
        fetch(`https://api.github.com/repos/${owner}/${repo}/readme`)
    ])

    if (!repoRes.ok || !readmeRes.ok) throw new Error('Failed to fetch repository details')

    const repoData = await repoRes.json()
    const readmeData = await readmeRes.json()

    return {
        ...repoData,
        readme: atob(readmeData.content)
    }
}

function RepoDetailsSkeleton() {
    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
            </CardContent>
            <CardFooter>
                <Skeleton className="h-10 w-32" />
            </CardFooter>
        </Card>
    )
}

export default function RepoDetailsPage() {
    const { owner, repoName } = useParams()
    const [repoDetails, setRepoDetails] = useState<RepoDetails | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const data = await fetchRepoDetails(owner as string, repoName as string)
                setRepoDetails(data)
            } catch (error) {
                console.error('Error fetching repository details:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchDetails()
    }, [owner, repoName])

    if (loading) {
        return <RepoDetailsSkeleton />
    }

    if (!repoDetails) {
        return <div className="text-center text-red-500">Failed to load repository details.</div>
    }

    return (
        <div className="container mx-auto py-12">
            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-3xl font-bold">{repoDetails.name}</CardTitle>
                        <img src={repoDetails.owner.avatar_url} alt={repoDetails.owner.login} className="w-12 h-12 rounded-full" />
                    </div>
                    <CardDescription>{repoDetails.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">{repoDetails.language}</Badge>
                            {repoDetails.topics.map(topic => (
                                <Badge key={topic} variant="outline">{topic}</Badge>
                            ))}
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <StarIcon className="mr-1" />
                                <span>{repoDetails.stargazers_count} stars</span>
                            </div>
                            <div className="flex items-center">
                                <GitForkIcon className="mr-1" />
                                <span>{repoDetails.forks_count} forks</span>
                            </div>
                            <div className="flex items-center">
                                <EyeIcon className="mr-1" />
                                <span>{repoDetails.watchers_count} watchers</span>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <CalendarIcon className="mr-1" />
                                <span>Created: {new Date(repoDetails.created_at).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                                <CalendarIcon className="mr-1" />
                                <span>Updated: {new Date(repoDetails.updated_at).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">README</h3>
                            <div className="bg-gray-100 p-4 rounded-md">
                                <pre className="whitespace-pre-wrap">{repoDetails.readme}</pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button asChild>
                        <a href={repoDetails.html_url} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    </Button>
                    <Link href={`/github/${owner}/${repoName}/branches`} passHref>
                        <Button variant="outline">View Branches</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}