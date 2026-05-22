'use client'
import { useRouter } from "next/navigation"

export default function CreateButton(){
     const router = useRouter()
    return(
           <button className="text-lg px-6 py-1 cursor-pointer bg-black/50 text-white border border-black/10" onClick={() => router.push("/Blog/create")}>Create Blog</button>
    )
}