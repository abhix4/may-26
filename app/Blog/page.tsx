
// import { useRouter } from "next/navigation"

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
                    <div className="border border-black/10 rounded-sm w-fit px-12 py-8" key={blog.id ?? i}>
                        <p className="text-lg">{blog.title}</p>
                        <p className="italic">{blog.author}</p>
                    </div>
                ))
            }
           </div>
        </div>
    )
}