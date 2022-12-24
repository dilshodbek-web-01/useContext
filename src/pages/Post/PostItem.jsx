import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const PostItem = () => {

    const [post, setPost] = useState({});
    const [load, setLoad] = useState(false);

    const { id } = useParams();
    const goback = useNavigate();
    const loc = useLocation();
    
    console.log(loc);


    const fetchItem = async () => {
        const item = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const result = await item.json();
        setPost(result);
        setTimeout(()=> {
            setLoad(true);
        }, 1000)
    }

    useEffect(() => {
        fetchItem();
    }, []);

    const { title, body } = post;

    return (
        <div className='p-5 m-5 w-75 mx-auto shadow-lg'>
            {load ?
                <>
                    <h1>{id} {title}</h1>
                    <p>{body}</p>
                </> : <>

                    <p className="placeholder-glow">
                        <span className="placeholder col-12"></span>
                    </p>

                    <p className="placeholder-wave">
                        <span className="placeholder col-12"></span>
                    </p>

                </>
            }
            <button className="btn btn-primary" onClick={() => goback("/posts")}>go back</button>
        </div>
    );
};

export default PostItem;