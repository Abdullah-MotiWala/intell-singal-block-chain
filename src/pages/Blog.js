import { useState, useEffect } from 'react'

import { BiLoaderAlt } from 'react-icons/bi'

const Blog = () => {
    const [blogs, setBlogs] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchTweets = async () => {
            const response = await fetch('https://dummyjson.com/posts')
            const data = await response.json()
            setBlogs(data.posts)
            setLoading(false)
        }
        fetchTweets()
    }, [blogs])
    return (
        <div className='flex flex-col items-center mt-20  w-full  bg-gr min-h-screen'
        id='blog'
        >
            <h2 className='text-4xl py-4 font-semibold text-white'>Blogs</h2>
            {loading && <div className="flex justify-center">
                <span className=" animate-spin text-sky-600 "><BiLoaderAlt className="h-10 w-10" /></span>
            </div>}

            {blogs &&
                <div className="p-2 grid grid-col-1 lg:grid-cols-2">
                    {blogs.map((blogs) => (
                        <div className="col-span-1 rounded-xl bg-gray-100 p-4 m-4" key={blogs.id}>
                            <h2 className='text-2xl font-semibold text-gray-800'>{blogs.title}</h2>
                            <p className='text-gray-700'> {blogs.body}</p>
                           
                        </div>
                    ))}
                </div>}
        </div>
    );
}

export default Blog;