import React from 'react';
import { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

function Welcome() {
  let [isUser, setIsUser] = useState(true);
  const handleClick = () => setIsUser(isUser = !isUser);
  return isUser ? <Login handleClick={handleClick} /> : <Register handleClick={handleClick} />
};

export default Welcome;
