interface Blog  {
    title: string;
    author: string
}
const blogs: Blog[] = [
    {
        title: 'my first blog',
        author: 'Abhi'
    }
]

export async function GET(request: Request) {

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
  blogs.push(newBlog)
  console.log(newBlog)
 
  return new Response(JSON.stringify(newBlog), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}