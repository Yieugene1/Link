import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Grid } from '@mui/material';
import UserInfoCard from '../components/UserInfoCard';
import MainContent from '../components/MainContent';

import ContactCard from '../components/ContactCard';

function Home() {
  return (
    <div >
      <div className='flex space-x-4'>
        <div className='flex-1'>
          <UserInfoCard />
        </div>
        <div className='flex-1'>
          <MainContent />
        </div>
        <div className='flex-1'>
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
