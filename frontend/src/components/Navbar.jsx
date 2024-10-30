import React from 'react';
import { AppBar, Toolbar, Tabs, Button, Box, Tab } from '@mui/material';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary" elevation={4}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start'}}>
          <Tabs value={false} indicatorColor="secondary" textColor="inherit" >
            <Tab label="Home" component={Link} to="/" sx={tabStyle} />
            <Tab label="Friends" component={Link} to="/friends" sx={tabStyle} />
            <Tab label="Profile" component={Link} to="/profile" sx={tabStyle} />
          </Tabs>
        </Box>
        <Button color="inherit" component={Link} to="/welcome" sx={buttonStyle}>
          Log In/ Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const tabStyle = {
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none',
  margin: '0 10px'
};
const buttonStyle = {
  fontWeight: 'bold',
  textTransform: 'none'
};

export default Navbar;
