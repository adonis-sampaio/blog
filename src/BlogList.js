import React from 'react'
import {Link} from 'react-router-dom';

const BlogList = ({blogs, title}) => {

    return (
        <div className="blog-list">
            { blogs.map((blog) => {
                const {id, title, body, author} = blog;
                return <div className="blog-preview" key={id}>
                    <Link to={`/blogs/${id}`}>
                        <h1>{title}</h1>
                        <p>Written by {author}</p>
                    </Link>
                </div>
            })}
        </div>      
    )
}

export default BlogList
