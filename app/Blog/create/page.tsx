'use client'

import { useRouter } from "next/navigation"
import { useState, FormEvent } from "react"

export default function CreateBlog(){

    const [title, setTitle] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const router = useRouter()

     async function addBlog(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const response = await fetch('/api/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                author
            }),
        });

        if (!response.ok) {
            console.error('Failed to post blog');
            return;
        }

        const data = await response.json();
        console.log('blog created:', data);
        router.push("/Blog")
    }

    return (
        <div className="">
            <form onSubmit={addBlog} className="flex flex-col gap-3">
                <label htmlFor="title">Title</label>
                <input className="border border-black/10" type="text" onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="author">Author</label>
                <input type="text" className="border border-black/10" onChange={(e) => setAuthor(e.target.value)}  />
                <button type="submit" className="text-lg px-4 border border-black/10 cursor-pointer"> Add </button>
            </form>

        </div>
    )
}