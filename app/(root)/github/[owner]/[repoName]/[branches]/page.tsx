'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link'
import { GitBranchIcon } from 'lucide-react'

interface Branch {
  name: string
  commit: {
    sha: string
    url: string
  }
}

async function fetchBranches(owner: string, repo: string): Promise<Branch[]> {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches`)
  if (!res.ok) throw new Error('Failed to fetch branches')
  return res.json()
}

function BranchSkeleton() {
  return (
    <Card className="w-full mb-4">
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  )
}

export default function BranchListPage() {
  const { owner, repoName } = useParams()
  const [branches, setBranches] = useState<Branch[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBranchList = async () => {
      try {
        const data = await fetchBranches(owner as string, repoName as string)
        setBranches(data)
      } catch (error) {
        setError('Failed to load branches. Please try again later.')
        console.error('Error fetching branches:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBranchList()
  }, [owner, repoName])

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-center mb-8">
        <GitHubLogoIcon className="w-8 h-8 mr-2" />
        <h1 className="text-3xl font-bold">Branches for {owner}/{repoName}</h1>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => <BranchSkeleton key={i} />)}
        </div>
      ) : error ? (
        <Card className="w-full mb-4">
          <CardContent className="pt-6">
            <p className="text-center text-red-500">{error}</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {branches.map((branch) => (
            <Card key={branch.name} className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GitBranchIcon className="mr-2" />
                  {branch.name}
                </CardTitle>
                <CardDescription>
                  Latest commit: <Badge variant="outline">{branch.commit.sha.substring(0, 7)}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Link href={`/github/${owner}/${repoName}/tree/${branch.name}`} passHref>
                    <Button variant="outline">View Files</Button>
                  </Link>
                  <a href={branch.commit.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="link">View Commit</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href={`/github/${owner}/${repoName}`} passHref>
          <Button variant="outline">Back to Repository</Button>
        </Link>
      </div>
    </div>
  )
}