import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Register from '../components/Register';

function Welcome() {
    return (
        <>
            <Navbar />
            <div>
                <Login />
                <Register />
            </div>
        </>
    )
};



export default Welcome;