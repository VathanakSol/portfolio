import { NextRequest, NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// POST request handler
export async function POST(req: NextRequest) {
  if (!process.env.GITHUB_TOKEN) {
    return NextResponse.json({ error: 'GitHub token is not configured' }, { status: 500 });
  }

  try {
    const { name, description } = await req.json();

    if (!name) {
      return NextResponse.json({ error: 'Repository name is required' }, { status: 400 });
    }

    const response = await octokit.rest.repos.createForAuthenticatedUser({
      name,
      description: description || '',
      private: false,
    });

    return NextResponse.json(response.data, { 
      status: 201,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Error creating repository:', error);
    return NextResponse.json(
      { error }, 
      { status: 500, headers: corsHeaders }
    );
  }
}

// OPTIONS request handler (for CORS preflight)
export function OPTIONS() {
  return new NextResponse(null, {
    status: 204, // No content
    headers: corsHeaders,
  });
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Allow all origins
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Config for API route
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };