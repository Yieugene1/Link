import React from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs value={false}>
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Friends" component={Link} to="/friends" />
          <Tab label="Profile" component={Link} to="/profile" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;