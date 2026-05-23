import { Insert, QueryAll } from "@/app/db";


export async function GET(request: Request) {

  const blogs = QueryAll()
  return new Response(JSON.stringify(blogs), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
 
export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();
  const { title, author } = body;
 
  // e.g. Insert new user into your DB
  const newBlog = { title, author };
  Insert(newBlog)
  console.log(newBlog)
 
  return new Response(JSON.stringify(newBlog), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}