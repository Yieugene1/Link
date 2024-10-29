import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Grid } from '@mui/material';
import UserInfoCard from '../components/UserInfoCard';
import MainContent from '../components/MainContent';

import ContactCard from '../components/ContactCard';

function Home() {
  return (
    <Box>

      <Grid container>
        <Grid item xs={12} md={3}>
          <UserInfoCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainContent />
        </Grid>
        <div>
          <ContactCard />
        </div>
      </Grid>
    </Box>
  );
}

export default Home;
