import React, { useState } from 'react';
import FormInput from "../../UI/FormInput";
import Button from "../../UI/Button";
import { toast, ToastContainer } from "react-toastify";

const index = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const auth = (e) => {

        e.preventDefault();

        const submitForm = {
            username: username,
            password: password,
        };

        const check = {
            username: username.trim().length === 0,
            password: password.trim().length === 0
        }

        if (check.username || check.password) {
            toast.error('Please enter username and password');
        } else {

            setUsername('');
            setPassword('');
            toast.success('new User successfully sign-in');
        }

    };

    return (
        <div className="home card bg-light shadow-lg p-5 mt-5 mx-auto w-75">
            <h1>Login Page</h1>

            <form action="#" onSubmit={() => auth()}>

                <FormInput type="text" labelText={"Enter username"} pl={"Enter username"} fo={"user"}
                    val={username} setVal={setUsername} />

                <FormInput type="password" labelText={"Enter user password"} pl={"Enter user password"} fo={"userage"}
                    val={password} setVal={setPassword} />

                <Button type="submit" btn="btn btn-success p-3 w-100 mt-3" >
                    LOGIN
                </Button>
                <ToastContainer />
            </form>
        </div>
    );
};

export default index;