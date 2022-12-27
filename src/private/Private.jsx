import React from 'react';
import "./style.scss";
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Private = () => {

    const auth = false;

    return (
        <>
            {auth ? <>

                <Navbar />

                <main>
                    <div className="container">
                        <Outlet />
                    </div>
                </main>

                <Footer />

            </> : <Navigate to="/login" />}
        </>
    );
};

export default Private;