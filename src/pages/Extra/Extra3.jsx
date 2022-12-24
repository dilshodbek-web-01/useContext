import React, { useContext } from 'react';
import { context } from "../../context";

const Extra3 = () => {

    const message = useContext(context);

    console.log(message);

    return (
        <div className='card w-75 p-3 mx-auto m-5 bg-danger'>
            <h1>Extra 3</h1>
            <h3>{message.message}</h3>
        </div>
    );
};

export default Extra3;