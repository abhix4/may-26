

export default async function Page({ params }: {
    params: Promise<{blogId: string}>
}){

    const { blogId} = await params;
    const data = await (await fetch("http://localhost:3000/api/blogs")).json()
    console.log(data)
    

    return (
        <div>
            <p className="underline text-2xl">this post is {blogId} </p>
        </div>
    )
}