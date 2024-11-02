import React, { useState } from 'react';
import { TextField } from '@mui/material';
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
    <div className="flex justify-center items-center ">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-[400px] h-[600px] overflow-y-auto opacity-80">

        <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>

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
            label="password"
            value={password}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className='text-red-500 mb-4'>{error}</p>}
          {success && <p className='text-green-500 mb-4'>{success}</p>}
          <button
            type="submit"
            className="btn w-full mt-4 text-white btn-primary"
            color="primary"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-black ">
          Don't have an account?{' '}
          <span onClick={handleClick} className="text-blue-500 cursor-pointer">
            Register here
          </span>
        </p>
      </div>

    </div>
  );
};

export default Login;
