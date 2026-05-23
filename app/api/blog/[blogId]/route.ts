import { Query } from '@/app/db';
import { NextRequest } from 'next/server';
 
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ blogId: string }> },
) {
  const id = (await params).blogId;

  const blog = Query(id)
  // e.g. Query a database for user with ID `id`
  return new Response(JSON.stringify(blog), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}