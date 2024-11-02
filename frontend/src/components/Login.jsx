import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { signIn } from '../store/userSlice.js'
import { login } from '../lib/fetch';

const Login = ({ handleClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch()
  const [success, setSuccess] = useState(''); 
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const response = await login(username, password);
    if (response.ok) {
      dispatch(signIn())
      setSuccess('Logged in successfully!'); 
      setTimeout(() => {
        navigate('/home'); 
      }, 1500);
    } else {
      const data = await response.json();
      setError(data.non_field_errors);
    }
  };

  return (
    <Container maxWidth="sm" >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgcolor="#ffffff"
        padding="20px"
        borderRadius="8px">

        <Typography variant="h4" component="h2" gutterBottom>Login</Typography>

        <form onSubmit={handleSubmit} >
          <TextField
            margin="normal"
            fullWidth
            type="text"
            label="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            type="password"
            label="Password"
            value={password}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          {success && <Typography style={{ color: 'green' }}>{success}</Typography>}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
          >
            Login
          </Button>
        </form>
        <Typography>
        Don't have an account?{' '}
        <span onClick={handleClick} style={{ color: 'blue', cursor: 'pointer' }}>
          Register here
        </span>
      </Typography>
      </Box>

    </Container>
  );
};

export default Login;
