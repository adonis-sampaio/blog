import React, {useState, useEffect} from 'react'
import BlogList from './BlogList'
import useFetch from  './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            <h2>HomePage</h2>
            { error && <div>{ error }</div>}
            {isPending && <p>Loading...</p>}
            { blogs && <BlogList 
                blogs={blogs} 
                title="Mario's blogs" 
            />}  
            
        </div>
    )
}

export default Home
