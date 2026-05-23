

export default async function Page({ params }: {
    params: Promise<{blogId: string}>
}){

    const { blogId} = await params;
    const data = await (await fetch(`http://localhost:3000/api/blog/${blogId}`)).json()
    console.log(data)
    


    return (
        <div>
            <p className=" text-2xl">{data.title} </p>
            <p className="text-xl ">By : {data.author} </p>
        </div>
    )
}