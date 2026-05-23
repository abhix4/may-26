
// import { useRouter } from "next/navigation"

import BlogCard from "../components/blogCard"
import CreateButton from "../components/button"

export default async function Blogs(){

    const blogs: any = await (await fetch("http://localhost:3000/api/blogs")).json()
   
    
    return (
        <div>
            <h1 className="mb-6">All blogs</h1>
            <CreateButton/>
         
           <div className="flex gap-2 mt-8">
             {
                blogs && blogs.map((blog: any, i: number) => (
                  <BlogCard blog={blog} key={i}/>
                ))
            }
           </div>
        </div>
    )
}