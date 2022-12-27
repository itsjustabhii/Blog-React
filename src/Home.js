import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new Website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome to the party', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'rodeo', id: 3},
    ])

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    //Runs for every render
    useEffect(() => {
        console.log('Use effect ran');
    }, [])


    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={ handleDelete}/>
            <button onClick={() => setName('Michael')}>Change name</button>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!"/>
        </div>
     );
}
 
export default Home;