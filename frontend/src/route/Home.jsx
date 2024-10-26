import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import UserInfoCard from '../components/UserInfoCard';
import MainContent from '../components/MainContent';
import Messages from '../components/Messages';

function Home() {
  return (
    <>
      <Navbar />
      <Box>

        <Grid container>
          <Grid item xs={12} md={3}>
            <UserInfoCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <MainContent />
          </Grid>
          <Grid item xs={12} md={3}>
            <Messages />
          </Grid>
        </Grid>
        <Container maxWidth="sm">
          <h1>Home Page</h1>
          <Link to="/welcome">Go to welcome</Link>
          <p>Welcome to the home page of our social media app!</p>
        </Container>
      </Box>
    </>
  );
}

export default Home;
