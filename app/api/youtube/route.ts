import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const videoId = searchParams.get('videoId')

    if (!videoId) {
        return NextResponse.json({ error: 'Video ID is required' }, { status: 400 })
    }

    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.YOUTUBE_API_KEY}&part=snippet,statistics`)
        const data = await response.json()

        if (data.items && data.items.length > 0) {
            const videoData = {
                title: data.items[0].snippet.title,
                description: data.items[0].snippet.description,
                viewCount: data.items[0].statistics.viewCount,
                likeCount: data.items[0].statistics.likeCount,
                commentCount: data.items[0].statistics.commentCount,
            }
            return NextResponse.json(videoData)
        } else {
            return NextResponse.json({ error: 'Video not found' }, { status: 404 })
        }
    } catch (error) {
        console.error("Error fetching video data:", error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

