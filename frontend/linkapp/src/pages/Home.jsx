import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="sm">
      <h1>Home Page</h1>
      <Link to="/login">Go to Login</Link>
      <p>Welcome to the home page of our social media app!</p>
    </Container>
  );
}

export default Home;