import React from 'react';
import { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

function Welcome() {
  let [isUser, setIsUser] = useState(true);
  const handleClick = () => setIsUser(isUser = !isUser);

  return (
    <div className="flex h-screen bg-cover text-white" style={{ backgroundImage: "url('https://picsum.photos/4000')" }}>
      <div className="w-1/2 flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold">Welcome to Our Platform</h1>
        <p className="mt-4">Join us and discover amazing opportunities!</p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        {isUser ? <Login handleClick={handleClick} /> : <Register handleClick={handleClick} />}
      </div>
    </div>
  )
};

export default Welcome;
