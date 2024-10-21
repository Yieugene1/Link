import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/login">Go to Login</Link>
      <p>Welcome to the home page of our social media app!</p>
    </div>
  );
}

export default Home;