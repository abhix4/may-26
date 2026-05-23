'use client'
import { useRouter } from "next/navigation"

export default function BlogCard({blog}: {blog: {title: string, author: string}}){

    const router = useRouter()

    return (
          <div className="border border-black/10 rounded-sm w-fit px-12 py-8" onClick={() => router.push(`/Blog/${blog.title}`)}>
            <p className="text-lg">{blog.title}</p>
            <p className="italic">{blog.author}</p>
          </div>
    )
}