export default function BlogLayout({
    children
}: {
    children: React.ReactNode
}){
    return (
        <section>
            <p className="text-3xl text-red-300 pb-6">Blogger</p>
            {
                children
            }
        </section>
    )
}