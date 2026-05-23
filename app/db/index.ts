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

export function Insert (blog: Blog){
    blogs.push(blog)
}

export function Query (title: string){
    // blogs.push(blog)
    const qResult = blogs.filter((blog) => blog.title === title ) 
    return qResult[0];
}

export function QueryAll (){
    // blogs.push(blog)
    // const qResult = blogs.filter((blog) => blog.title === title ) 
    return blogs;
}